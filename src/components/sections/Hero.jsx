import { lazy, Suspense, useCallback, useState } from 'react'
import { ArrowDown, ArrowDownRight, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/contexts/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SITE, hero } from '@/data/content'
import profileImage from '@/assets/eu.png'

const PixelBlast = lazy(() => import('@/components/effects/PixelBlast'))

export default function Hero() {
  const { t, language } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [interactionElement, setInteractionElement] = useState(null)
  const [firstName, ...restName] = SITE.name.split(' ')
  const lastName = restName.join(' ')

  const heroRef = useCallback((node) => {
    setInteractionElement(node)
  }, [])

  const titleLines =
    language === 'pt'
      ? ['DESENVOLVEDOR', 'FRONT-END']
      : ['FRONT-END', 'DEVELOPER']

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex h-[100svh] max-h-[100svh] overflow-hidden text-white"
      aria-labelledby="hero-name"
    >
      {/* z-0 — Pixel Blast full-bleed background */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Suspense fallback={<div className="absolute inset-0 bg-black/40" />}>
          {!reduceMotion ? (
            <PixelBlast
              className="absolute inset-0 h-full w-full"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              variant="square"
              pixelSize={4}
              color="#1DB954"
              speed={0.9}
              patternScale={2.4}
              patternDensity={1.05}
              enableRipples
              liquid
              liquidStrength={0.06}
              liquidRadius={1.1}
              edgeFade={0.35}
              transparent
              autoPauseOffscreen
              interactionElement={interactionElement}
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(29,185,84,0.22),transparent_55%)]" />
          )}
        </Suspense>
      </div>

      {/* z-1 — soft transparent overlay only (no opaque fills) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.02)_100%)]"
        aria-hidden="true"
      />

      {/* z-2 — content (events bubble to section → PixelBlast) */}
      <div className="container-page relative z-[2] grid h-full w-full content-center items-center gap-6 bg-transparent pb-28 pt-20 md:gap-8 md:pb-28 md:pt-[4.25rem] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative max-w-2xl bg-transparent">
          <motion.p
            className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-[#1DB954]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t(hero.greeting)}
          </motion.p>

          <h1 id="hero-name" className="font-display">
            <span className="hero-title block text-white">
              {firstName}
            </span>
            <span className="hero-title mt-1 block text-white/95">
              {lastName}
            </span>
          </h1>

          <motion.div
            className="mt-5 space-y-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {titleLines.map((line) => (
              <p
                key={line}
                className="hero-subtitle font-sans uppercase tracking-[0.14em] text-white/85"
              >
                {line}
              </p>
            ))}
          </motion.div>

          <motion.p
            className="hero-description hero-text-shadow mt-6 max-w-md"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 }}
          >
            {t(hero.description)}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          >
            <Button href="#servicos" disableMotion>
              {t(hero.ctaProjects)}
              <ArrowDownRight size={16} aria-hidden="true" />
            </Button>
            <Button
              href={SITE.cvUrl}
              variant="secondary"
              download
              disableMotion
              className="border-white/25 bg-white/[0.06] text-white backdrop-blur-sm hover:border-[#1DB954] hover:text-[#1DB954]"
            >
              <Download size={16} aria-hidden="true" />
              {t(hero.ctaCv)}
            </Button>
            <Button
              href="#contato"
              variant="ghost"
              disableMotion
              className="border-white/20 bg-white/[0.06] text-white backdrop-blur-sm hover:border-[#1DB954] hover:text-[#1DB954]"
            >
              <Mail size={16} aria-hidden="true" />
              {t(hero.ctaContact)}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[26rem] items-center justify-center bg-transparent sm:max-w-[32rem] lg:max-w-none lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex w-full items-center justify-center bg-transparent lg:justify-end">
            <img
              src={profileImage}
              alt={`${SITE.name} — ${t(SITE.role)}`}
              width={900}
              height={1200}
              className="mx-auto h-auto max-h-[calc(100svh-14rem)] w-[min(100%,20rem)] select-none bg-transparent object-contain object-center drop-shadow-[0_20px_60px_rgba(29,185,84,0.18)] sm:max-h-[calc(100svh-12rem)] sm:w-[min(100%,26rem)] lg:mx-0 lg:max-h-[calc(100svh-10rem)] lg:w-[min(65%,32rem)]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 z-[3] inline-flex -translate-x-1/2 items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.22em] text-white/65 transition hover:text-[#1DB954]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <ArrowDown size={16} aria-hidden="true" />
        </motion.span>
        {t(hero.scrollDown)}
      </a>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] block h-4 w-full sm:h-6"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 30C240 8 480 8 720 25C960 42 1200 42 1440 18V40H0V30Z"
          fill="var(--background)"
        />
      </svg>
    </section>
  )
}
