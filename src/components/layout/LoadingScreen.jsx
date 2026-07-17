import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLanguage } from '@/contexts/LanguageContext'
import { SITE, ui } from '@/data/content'

export default function LoadingScreen({ onDone }) {
  const [visible, setVisible] = useState(true)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 1400)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[var(--background)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          role="status"
          aria-live="polite"
          aria-label={t(ui.loading)}
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              className="font-display text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {SITE.name.split(' ')[0]}
              <span className="text-[var(--primary)]">.</span>
            </motion.div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-[var(--border)]">
              <motion.div
                className="h-full rounded-full bg-[var(--primary)]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.1, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
