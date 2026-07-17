import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { about } from '@/data/content'

function RichText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return <span key={index}>{part}</span>

    const [, label, href] = match
    return (
      <a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[var(--primary)] underline-offset-2 transition hover:text-[var(--primary-hover)] hover:underline"
      >
        {label}
      </a>
    )
  })
}

export default function About() {
  const { t } = useLanguage()

  const blocks = [
    { title: { pt: 'História', en: 'Story' }, body: about.story },
    { title: { pt: 'Experiência', en: 'Experience' }, body: about.experience },
    { title: { pt: 'Objetivos', en: 'Goals' }, body: about.goals },
  ]

  return (
    <section id="sobre" className="section-padding" aria-labelledby="about-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="about-title">{t(about.title)}</span>}
          subtitle={t(about.subtitle)}
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {blocks.map((block, index) => (
            <Reveal key={t(block.title)} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-xl font-semibold text-[var(--foreground)]">
                  {t(block.title)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  <RichText text={t(block.body)} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* <Reveal className="mt-10">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
            {t(about.favoritesLabel)}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {about.favorites.map((tech) => (
              <span
                key={tech}
                className="rounded-2xl border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm text-[var(--muted)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal> */}
      </div>
    </section>
  )
}
