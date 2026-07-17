import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { process } from '@/data/content'

export default function Process() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-[var(--surface)]" aria-labelledby="process-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="process-title">{t(process.title)}</span>}
          subtitle={t(process.subtitle)}
        />

        <div className="grid gap-4 md:grid-cols-5">
          {process.steps.map((step, index) => (
            <Reveal key={t(step.title)} delay={index * 0.06}>
              <article className="relative h-full rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 text-center">
                <span className="font-display text-3xl font-semibold text-[var(--primary)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold text-[var(--foreground)]">
                  {t(step.title)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
                  {t(step.description)}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
