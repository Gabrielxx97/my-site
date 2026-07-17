import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { testimonials } from '@/data/content'

export default function Testimonials() {
  const { t } = useLanguage()

  return (
    <section className="section-padding" aria-labelledby="testimonials-title">
      <div className="container-page">
        <SectionHeading
          title={<span id="testimonials-title">{t(testimonials.title)}</span>}
          subtitle={t(testimonials.subtitle)}
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.07}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-soft)]">
                <p className="flex-1 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                  “{t(item.quote)}”
                </p>
                <footer className="mt-6 border-t border-[var(--border)] pt-4">
                  <cite className="not-italic">
                    <span className="block font-semibold text-[var(--foreground)]">
                      {item.name}
                    </span>
                    <span className="text-sm text-[var(--muted)]">{t(item.role)}</span>
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
