import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageToggle from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { notFound } from '@/data/content'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-mesh px-4">
      <div className="absolute right-4 top-4 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>
      <div className="max-w-lg text-center">
        <p className="font-display text-8xl font-semibold text-[var(--primary)]">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-[var(--foreground)]">
          {t(notFound.title)}
        </h1>
        <p className="mt-3 text-[var(--muted)]">{t(notFound.description)}</p>
        <motion.div className="mt-8 flex justify-center" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#04140a] shadow-[0_0_24px_var(--glow)] transition hover:bg-[var(--primary-hover)]"
          >
            {t(notFound.cta)}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
