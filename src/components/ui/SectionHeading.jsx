import Reveal from '@/components/effects/Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment =
    align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto'

  return (
    <Reveal className={`mb-14 flex max-w-2xl flex-col gap-3 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base leading-relaxed text-[var(--muted)] sm:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  )
}
