import { ExternalLink, GitFork, Star } from 'lucide-react'
import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useGitHub } from '@/hooks/useGitHub'
import { useLanguage } from '@/contexts/LanguageContext'
import { githubSection, SITE } from '@/data/content'

export default function GitHubStats() {
  const { t } = useLanguage()
  const { data, loading, error } = useGitHub(SITE.githubUsername)

  return (
    <section className="section-padding" aria-labelledby="github-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="github-title">{t(githubSection.title)}</span>}
          subtitle={t(githubSection.subtitle)}
        />

        {loading ? (
          <p className="text-center text-sm text-[var(--muted)]">{t(githubSection.loading)}</p>
        ) : null}

        {error ? (
          <p className="text-center text-sm text-[var(--muted)]">{t(githubSection.error)}</p>
        ) : null}

        {data ? (
          <>
            <Reveal className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <img
                src={data.user.avatar}
                alt={data.user.name}
                width={72}
                height={72}
                className="h-[72px] w-[72px] rounded-2xl border border-[var(--border)] object-cover"
                loading="lazy"
              />
              <div className="text-center sm:text-left">
                <p className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {data.user.name}
                </p>
                <a
                  href={data.user.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--primary)] transition hover:text-[var(--primary-hover)]"
                >
                  @{data.user.login}
                </a>
                {data.user.bio ? (
                  <p className="mt-1 max-w-md text-sm text-[var(--muted)]">{data.user.bio}</p>
                ) : null}
              </div>
            </Reveal>

            <Reveal className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {data.contributions}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {t(githubSection.contributionsYear)}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {SITE.projetosEnvolvidos}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {t(githubSection.projectsInvolved)}
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {data.user.followers}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t(githubSection.followers)}</p>
              </div>
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                <p className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {data.stars}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">{t(githubSection.stars)}</p>
              </div>
            </Reveal>

            <p className="mb-8 text-center text-xs text-[var(--muted)]">
              {t(githubSection.notePrivate)}
            </p>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal>
                <h3 className="mb-4 font-display text-lg font-semibold">
                  {t(githubSection.repos)}
                </h3>
                {data.repos.length ? (
                  <div className="grid gap-3">
                    {data.repos.map((repo) => (
                      <a
                        key={repo.id}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition hover:border-[var(--primary)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-medium text-[var(--foreground)]">{repo.name}</p>
                            <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                              {repo.description || '—'}
                            </p>
                          </div>
                          <ExternalLink size={16} className="mt-1 shrink-0 text-[var(--muted)]" />
                        </div>
                        <div className="mt-3 flex flex-wrap gap-3 text-xs text-[var(--muted)]">
                          {repo.language ? <span>{repo.language}</span> : null}
                          <span className="inline-flex items-center gap-1">
                            <Star size={12} aria-hidden="true" /> {repo.stars}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork size={12} aria-hidden="true" /> {repo.forks}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                    <p className="text-sm text-[var(--muted)]">{t(githubSection.emptyRepos)}</p>
                    <a
                      href={data.user.htmlUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--primary-hover)]"
                    >
                      {t(githubSection.profile)}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                )}
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="mb-4 font-display text-lg font-semibold">
                  {t(githubSection.languages)}
                </h3>
                <div className="space-y-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
                  {data.languages.length ? (
                    data.languages.map((lang) => (
                      <div key={lang.name}>
                        <div className="mb-1 flex justify-between text-sm">
                          <span className="text-[var(--foreground)]">{lang.name}</span>
                          <span className="text-[var(--muted)]">{lang.count}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${Math.min(100, lang.count * 18)}%`,
                              background: lang.color,
                            }}
                          />
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-[var(--muted)]">{t(githubSection.emptyLanguages)}</p>
                  )}
                </div>
              </Reveal>
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
