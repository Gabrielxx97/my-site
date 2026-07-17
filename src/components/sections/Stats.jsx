import CountUp from '@/components/effects/CountUp'
import Reveal from '@/components/effects/Reveal'
import { useLanguage } from '@/contexts/LanguageContext'
import { SITE, stats } from '@/data/content'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="pb-[clamp(4rem,8vw,6rem)]" aria-label="Statistics">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat, index) => {
            const value =
              stat.valueKey && SITE[stat.valueKey] != null
                ? SITE[stat.valueKey]
                : stat.value

            return (
              <Reveal key={stat.key} delay={index * 0.06}>
                <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-[var(--shadow-soft)]">
                  <p className="font-display text-4xl font-semibold text-[var(--primary)]">
                    <CountUp to={value} suffix={stat.suffix} duration={1.6} />
                  </p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{t(stat.label)}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
