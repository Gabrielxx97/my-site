import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { ui } from '@/data/content'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] shadow-[var(--shadow-soft)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
          aria-label={t(ui.backToTop)}
        >
          <ArrowUp size={18} aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  )
}
