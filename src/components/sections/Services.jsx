import {
  AppWindow,
  Building2,
  Gauge,
  Layout,
  LayoutDashboard,
  RefreshCw,
} from 'lucide-react'
import Reveal from '@/components/effects/Reveal'
import SpotlightCard from '@/components/effects/SpotlightCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { services } from '@/data/content'

const icons = {
  Layout,
  Building2,
  LayoutDashboard,
  AppWindow,
  RefreshCw,
  Gauge,
}

export default function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="section-padding" aria-labelledby="services-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="services-title">{t(services.title)}</span>}
          subtitle={t(services.subtitle)}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((item, index) => {
            const Icon = icons[item.icon] || Layout
            return (
              <Reveal key={t(item.title)} delay={index * 0.05}>
                <SpotlightCard className="h-full p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--primary)]">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[var(--foreground)]">
                    {t(item.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {t(item.description)}
                  </p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
