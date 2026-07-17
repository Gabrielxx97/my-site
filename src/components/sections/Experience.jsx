import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { experience } from '@/data/content'

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experiencia"
      className="section-padding bg-[var(--surface)]"
      aria-labelledby="experience-title"
    >
      <div className="container-page">
        <SectionHeading
          title={<span id="experience-title">{t(experience.title)}</span>}
          subtitle={t(experience.subtitle)}
        />

        <ol className="relative mx-auto max-w-3xl space-y-8 border-l border-[var(--border)] pl-8">
          {experience.items.map((item, index) => (
            <li key={item.id} className="relative">
              <Reveal delay={index * 0.08}>
                <span className="absolute -left-[2.4rem] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--primary)] bg-[var(--background)] shadow-[0_0_12px_var(--glow)]" />
                <article className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                      {t(item.role)}
                    </h3>
                    <time className="text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
                      {t(item.period)}
                    </time>
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {item.company}
                    {item.location ? (
                      <span className="font-normal text-[var(--secondary)]">
                        {' '}
                        · {t(item.location)}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                    {t(item.description)}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>

        {experience.education?.length ? (
          <div className="mx-auto mt-16 max-w-3xl">
            <Reveal>
              <h3 className="mb-6 font-display text-xl font-semibold text-[var(--foreground)]">
                {t({ pt: 'Formação acadêmica', en: 'Education' })}
              </h3>
            </Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {experience.education.map((item, index) => (
                <li key={item.id}>
                  <Reveal delay={index * 0.08}>
                    <article className="h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                      <p className="text-xs font-medium uppercase tracking-wide text-[var(--primary)]">
                        {t(item.period)}
                      </p>
                      <h4 className="mt-2 font-display text-base font-semibold text-[var(--foreground)]">
                        {item.school}
                      </h4>
                      <p className="mt-1 text-sm text-[var(--muted)]">{t(item.course)}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  )
}
