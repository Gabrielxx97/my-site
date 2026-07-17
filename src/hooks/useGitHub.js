import { useEffect, useState } from 'react'
import { SITE } from '@/data/content'

const languageColors = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572a5',
  Vue: '#41b883',
  Go: '#00add8',
  Rust: '#dea584',
  Shell: '#89e051',
  SCSS: '#c6538c',
  Java: '#b07219',
  PHP: '#4f5d95',
  Ruby: '#701516',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Dart: '#00b4ab',
  Kotlin: '#a97bff',
  Swift: '#f05138',
}

async function fetchContributions(username, signal) {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { signal },
    )
    if (!res.ok) return null
    const json = await res.json()
    return json?.total?.lastYear ?? null
  } catch {
    return null
  }
}

export function useGitHub(username = SITE.githubUsername) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()

    async function load() {
      setLoading(true)
      setError(null)

      try {
        const headers = {
          Accept: 'application/vnd.github+json',
        }

        const [userRes, reposRes, contributions] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, {
            signal: controller.signal,
            headers,
          }),
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100&type=owner`,
            { signal: controller.signal, headers },
          ),
          fetchContributions(username, controller.signal),
        ])

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API error')
        }

        const user = await userRes.json()
        const allRepos = await reposRes.json()
        const repos = (Array.isArray(allRepos) ? allRepos : [])
          .filter((repo) => !repo.fork)
          .slice(0, 6)

        const languageCount = (Array.isArray(allRepos) ? allRepos : []).reduce(
          (acc, repo) => {
            if (!repo.fork && repo.language) {
              acc[repo.language] = (acc[repo.language] || 0) + 1
            }
            return acc
          },
          {},
        )

        const languages = Object.entries(languageCount)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 6)
          .map(([name, count]) => ({
            name,
            count,
            color: languageColors[name] || '#1DB954',
          }))

        const stars = (Array.isArray(allRepos) ? allRepos : []).reduce(
          (sum, repo) => sum + (repo.stargazers_count || 0),
          0,
        )

        if (!cancelled) {
          setData({
            user: {
              name: user.name || user.login,
              login: user.login,
              avatar: user.avatar_url,
              bio: user.bio,
              followers: user.followers,
              following: user.following,
              publicRepos: user.public_repos,
              htmlUrl: user.html_url,
            },
            repos: repos.map((repo) => ({
              id: repo.id,
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              language: repo.language,
              stars: repo.stargazers_count,
              forks: repo.forks_count,
              updatedAt: repo.updated_at,
            })),
            languages,
            stars,
            contributions: contributions ?? 0,
          })
        }
      } catch (err) {
        if (!cancelled && err.name !== 'AbortError') {
          setError(err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => {
      cancelled = true
      controller.abort()
    }
  }, [username])

  return { data, loading, error }
}
