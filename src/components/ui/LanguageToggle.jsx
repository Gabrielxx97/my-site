import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/data/content'

export default function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex h-10 min-w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] px-3 text-xs font-bold tracking-wide text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] ${className}`}
      aria-label={t(ui.language)}
    >
      {language === 'pt' ? 'EN' : 'PT'}
    </button>
  )
}
