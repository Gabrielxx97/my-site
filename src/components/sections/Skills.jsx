import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '@/components/effects/Reveal'
import SectionHeading from '@/components/ui/SectionHeading'
import { useLanguage } from '@/contexts/LanguageContext'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { skills } from '@/data/content'

const ROWS = 2

function skillIconSrc(item) {
  if (item.iconUrl) return item.iconUrl
  return `https://skillicons.dev/icons?i=${item.icon}`
}

function useGridColumns() {
  const isSm = useMediaQuery('(min-width: 640px)')
  const isMd = useMediaQuery('(min-width: 768px)')
  const isLg = useMediaQuery('(min-width: 1024px)')

  if (isLg) return 5
  if (isMd) return 4
  if (isSm) return 3
  return 2
}

function SkillCard({ item }) {
  return (
    <article
      data-cursor="hover"
      className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl bg-[var(--card)] p-4 shadow-[var(--shadow-soft)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_var(--glow)]"
    >
      <img
        src={skillIconSrc(item)}
        alt=""
        width={56}
        height={56}
        loading="lazy"
        className="h-12 w-12 object-contain transition duration-300 sm:h-14 sm:w-14"
      />
      <h3 className="text-center text-xs font-bold uppercase tracking-wide text-[var(--foreground)] sm:text-sm">
        {item.name}
      </h3>
    </article>
  )
}

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 48 : -48,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -48 : 48,
    opacity: 0,
  }),
}

export default function Skills() {
  const { t } = useLanguage()
  const columns = useGridColumns()
  const [activeFilter, setActiveFilter] = useState(null)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)

  const filteredItems = useMemo(() => {
    if (!activeFilter) return skills.items
    return skills.items.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  const useCarousel = columns > 2
  const pageSize = columns * ROWS
  const totalPages = useCarousel
    ? Math.max(1, Math.ceil(filteredItems.length / pageSize))
    : 1
  const showPagination = useCarousel && totalPages > 1

  const pageItems = useMemo(() => {
    if (!useCarousel) return filteredItems
    const start = page * pageSize
    return filteredItems.slice(start, start + pageSize)
  }, [filteredItems, page, pageSize, useCarousel])

  useEffect(() => {
    setPage(0)
    setDirection(0)
  }, [activeFilter, columns])

  useEffect(() => {
    if (page > totalPages - 1) setPage(Math.max(0, totalPages - 1))
  }, [page, totalPages])

  const toggleFilter = (id) => {
    setActiveFilter((current) => (current === id ? null : id))
  }

  const goToPage = (nextPage) => {
    if (nextPage < 0 || nextPage >= totalPages || nextPage === page) return
    setDirection(nextPage > page ? 1 : -1)
    setPage(nextPage)
  }

  const gridClass =
    columns >= 5
      ? 'grid-cols-5'
      : columns === 4
        ? 'grid-cols-4'
        : columns === 3
          ? 'grid-cols-3'
          : 'grid-cols-2'

  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-[var(--surface)]"
      aria-labelledby="skills-title"
    >
      <div className="container-page">
        <SectionHeading
          title={
            <span id="skills-title" className="text-[var(--primary)]">
              {t(skills.title)}
            </span>
          }
          subtitle={t(skills.subtitle)}
        />

        <Reveal className="mb-8 md:hidden">
          <div
            className="flex flex-wrap justify-center gap-2"
            role="group"
            aria-label="Filtro de skills"
          >
            {skills.filters.map((filter) => {
              const active = activeFilter === filter.id
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => toggleFilter(filter.id)}
                  aria-pressed={active}
                  className={`rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'border-[var(--primary)] bg-[var(--primary)] text-[#04140a]'
                      : 'border-[var(--border)] bg-[var(--card)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]'
                  }`}
                >
                  {t(filter.label)}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="relative flex items-start gap-6 lg:gap-10">
          <Reveal className="sticky top-28 hidden shrink-0 md:block">
            <nav
              className="flex items-stretch gap-3"
              aria-label="Filtro de skills"
            >
              <div
                className="w-0.5 self-stretch rounded-full bg-[var(--primary)]"
                aria-hidden="true"
              />
              <ul className="flex flex-col justify-center gap-6 py-1">
                {skills.filters.map((filter) => {
                  const active = activeFilter === filter.id
                  return (
                    <li key={filter.id}>
                      <button
                        type="button"
                        onClick={() => toggleFilter(filter.id)}
                        aria-pressed={active}
                        data-cursor="hover"
                        className={`whitespace-nowrap text-[0.7rem] font-bold uppercase tracking-[0.28em] transition [writing-mode:vertical-rl] [text-orientation:mixed] rotate-180 ${
                          active
                            ? 'text-[var(--primary)]'
                            : 'text-[var(--foreground)] hover:text-[var(--primary)]'
                        }`}
                      >
                        {t(filter.label)}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Reveal>

          <div className="min-w-0 flex-1">
            <div className="relative">
              {showPagination ? (
                <>
                  <button
                    type="button"
                    onClick={() => goToPage(page - 1)}
                    disabled={page === 0}
                    aria-label="Página anterior"
                    className="absolute -left-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:pointer-events-none disabled:opacity-30 md:flex lg:-left-4"
                  >
                    <ChevronLeft size={18} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToPage(page + 1)}
                    disabled={page >= totalPages - 1}
                    aria-label="Próxima página"
                    className="absolute -right-2 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] disabled:pointer-events-none disabled:opacity-30 md:flex lg:-right-4"
                  >
                    <ChevronRight size={18} aria-hidden="true" />
                  </button>
                </>
              ) : null}

              <div className="overflow-hidden p-5">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.ul
                    key={`${activeFilter ?? 'all'}-${page}-${columns}`}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    drag={showPagination ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      if (!showPagination) return
                      if (info.offset.x < -60) goToPage(page + 1)
                      else if (info.offset.x > 60) goToPage(page - 1)
                    }}
                    className={`grid gap-3 sm:gap-4 ${gridClass}`}
                  >
                    {pageItems.map((item) => (
                      <li key={item.name}>
                        <SkillCard item={item} />
                      </li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>

            {showPagination ? (
              <div
                className="mt-8 flex items-center justify-center gap-2"
                role="tablist"
                aria-label="Paginação de skills"
              >
                {Array.from({ length: totalPages }, (_, index) => {
                  const active = index === page
                  return (
                    <button
                      key={index}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      aria-label={`Página ${index + 1}`}
                      onClick={() => goToPage(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active
                          ? 'w-6 bg-[var(--primary)]'
                          : 'w-1.5 bg-[var(--secondary)] hover:bg-[var(--muted)]'
                      }`}
                    />
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
