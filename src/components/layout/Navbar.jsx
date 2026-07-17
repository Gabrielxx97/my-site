import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'
import LanguageToggle from '@/components/ui/LanguageToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { SITE, navItems, ui } from '@/data/content'

export default function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const ids = navItems.map((item) => item.id)
  const activeId = useScrollSpy(ids)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = (id) =>
    `rounded-xl px-3 py-2 text-sm font-medium transition ${
      activeId === id
        ? 'text-[var(--primary)]'
        : 'text-[var(--muted)] hover:text-[var(--foreground)]'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-[var(--shadow-soft)]' : 'bg-transparent'
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.25rem]"
        aria-label="Primary"
      >
        <a
          href="#inicio"
          className="font-display text-lg font-medium tracking-tight text-[var(--foreground)]"
        >
          {SITE.name}
          <span className="text-[var(--primary)]">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {t(item.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t(ui.closeMenu) : t(ui.openMenu)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-[var(--border)] lg:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${linkClass(item.id)} py-3`}
                  onClick={() => setOpen(false)}
                >
                  {t(item.label)}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
