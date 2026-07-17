import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/data/content'

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] ${className}`}
      aria-label={isDark ? t(ui.themeLight) : t(ui.themeDark)}
    >
      {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
    </button>
  )
}
