import { useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { GitHubIcon } from '@/components/ui/SocialIcons'
import { useLanguage } from '@/contexts/LanguageContext'
import { projects } from '@/data/content'

export default function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState('all')

  const techOptions = useMemo(() => {
    const set = new Set()
    projects.items.forEach((project) => project.tech.forEach((tech) => set.add(tech)))
    return ['all', ...Array.from(set).sort()]
  }, [])

  const filtered = projects.items.filter(
    (project) => filter === 'all' || project.tech.includes(filter),
  )

  return (
    <section id="projetos" className="section-padding" aria-labelledby="projects-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="projects-title">{t(projects.title)}</span>}
          subtitle={t(projects.subtitle)}
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          {techOptions.map((tech) => {
            const label = tech === 'all' ? t(projects.filterAll) : tech
            const active = filter === tech
            return (
              <button
                key={tech}
                type="button"
                onClick={() => setFilter(tech)}
                className={`rounded-2xl border px-4 py-2 text-sm transition ${
                  active
                    ? 'border-[var(--primary)] bg-[var(--primary)] text-[#04140a]'
                    : 'border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                }`}
                aria-pressed={active}
              >
                {label}
              </button>
            )
          })}
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={750}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {t(project.description)}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-xl border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
