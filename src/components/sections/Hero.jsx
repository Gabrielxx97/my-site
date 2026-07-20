import { lazy, Suspense, useCallback, useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '@/components/ui/SocialIcons'
import Shuffle from '@/components/effects/Shuffle'
import { useLanguage } from '@/contexts/LanguageContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { SITE, hero } from '@/data/content'
import profileImage from '@/assets/eu.png'

const PixelBlast = lazy(() => import('@/components/effects/PixelBlast'))

const heroSocials = [
  { href: SITE.socials.github, label: 'GitHub', icon: GitHubIcon },
  { href: SITE.socials.linkedin, label: 'LinkedIn', icon: LinkedInIcon },
  { href: SITE.socials.whatsapp, label: 'WhatsApp', icon: WhatsAppIcon },
  { href: SITE.socials.email, label: 'Email', icon: Mail },
]

export default function Hero() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [interactionElement, setInteractionElement] = useState(null)
  const [firstName, ...restName] = SITE.name.split(' ')
  const lastName = restName.join(' ')

  const heroRef = useCallback((node) => {
    setInteractionElement(node)
  }, [])

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex h-[var(--hero-height)] max-h-[var(--hero-height)] flex-col overflow-hidden text-white"
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

      {/* z-2 — content */}
      <div className="container-page relative z-[2] grid min-h-0 w-full flex-1 content-center items-center gap-3 bg-transparent py-2 sm:gap-5 md:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-0">
        {/* Mobile: texto à esquerda + ações à direita (ref). Desktop: coluna de texto. */}
        <div className="relative flex w-full items-center justify-between gap-3 bg-transparent lg:block lg:max-w-2xl">
          <div className="min-w-0 flex-1">
            <motion.p
              className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/85 sm:mb-2 sm:text-sm sm:tracking-[0.28em]"
              style={{ textShadow: '0 4px 4px #000' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t(hero.greeting)}
            </motion.p>

            <h1 id="hero-name" className="font-display flex flex-col items-start">
              <Shuffle
                text={firstName}
                tag="span"
                className="hero-title w-full text-white"
                style={{ textShadow: '0 4px 4px #000', display: 'block' }}
                textAlign="left"
                shuffleDirection="right"
                duration={0.4}
                shuffleTimes={1}
                animationMode="evenodd"
                stagger={0.03}
                threshold={0.1}
                rootMargin="0px"
                triggerOnce
                triggerOnHover
                respectReducedMotion
              />
              <Shuffle
                text={lastName}
                tag="span"
                className="hero-title mt-0.5 w-full text-white/95 sm:mt-1"
                style={{ textShadow: '0 4px 4px #000', display: 'block' }}
                textAlign="left"
                shuffleDirection="right"
                duration={0.4}
                shuffleTimes={1}
                animationMode="evenodd"
                stagger={0.03}
                threshold={0.1}
                rootMargin="0px"
                triggerOnce
                triggerOnHover
                respectReducedMotion
              />
            </h1>

            <motion.div
              className="mt-1.5 space-y-1 sm:mt-2"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <Shuffle
                text={t(SITE.role)}
                tag="p"
                className="hero-subtitle font-sans uppercase tracking-[0.12em] sm:tracking-[0.14em]"
                style={{ textShadow: '2px 2px 0 #000' }}
                textAlign="left"
                shuffleDirection="right"
                duration={0.35}
                shuffleTimes={1}
                animationMode="evenodd"
                stagger={0.03}
                threshold={0.1}
                rootMargin="0px"
                triggerOnce
                triggerOnHover
                respectReducedMotion
              />
            </motion.div>
          </div>

          {/* Ícones 2×2 + Download CV (largura do grid) */}
          <motion.div
            className="flex w-fit shrink-0 flex-col items-stretch gap-2.5 sm:gap-3 lg:mt-5 lg:w-auto lg:flex-row lg:items-center lg:gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 lg:flex lg:gap-3">
              {heroSocials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-white/85 backdrop-blur-sm transition hover:border-[#1DB954] hover:bg-[#1DB954]/10 hover:text-[#1DB954] sm:h-10 sm:w-10 lg:h-11 lg:w-11"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
            <Button
              href={SITE.cvUrl}
              variant="secondary"
              download
              disableMotion
              className="w-full justify-center whitespace-nowrap rounded-full border-white/25 bg-white/[0.06] px-[10px] py-2 text-[0.55rem] leading-none text-white backdrop-blur-sm hover:border-[#1DB954] hover:text-[#1DB954] sm:text-[0.65rem] lg:w-auto lg:rounded-2xl lg:gap-2 lg:px-5 lg:py-3 lg:text-sm"
            >
              <Download size={16} className="hidden shrink-0 lg:inline" aria-hidden="true" />
              {t(hero.ctaCv)}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[11.5rem] shrink items-center justify-center overflow-visible bg-transparent sm:max-w-[19rem] lg:max-w-none lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="hero-portrait relative mx-auto w-full max-h-[min(38svh,16rem)] overflow-visible sm:max-h-none lg:mx-0 lg:w-[min(100%,22rem)]"
            style={{ aspectRatio: '1 / 1.5' }}
          >
            <div
              className="pointer-events-none absolute bottom-0 left-0 aspect-square w-full rounded-full opacity-50 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            <div
              className="absolute bottom-0 left-0 z-0 aspect-square w-full rounded-full p-[0.55rem] sm:p-[0.8rem]"
              style={{
                background:
                  'linear-gradient(145deg, var(--primary-hover), var(--primary) 55%, color-mix(in srgb, var(--primary) 35%, #050505))',
                boxShadow:
                  '0 14px 36px color-mix(in srgb, var(--primary) 30%, transparent), inset 0 1px 0 color-mix(in srgb, var(--primary-hover) 50%, white)',
              }}
              aria-hidden="true"
            >
              <div
                className="h-full w-full rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 40% 28%, color-mix(in srgb, var(--surface) 60%, var(--primary)), #0a0a0a 80%)',
                  boxShadow: 'inset 0 2px 12px rgba(0,0,0,0.55)',
                }}
              />
            </div>

            <div className="absolute bottom-[0.55rem] left-[0.55rem] right-[0.55rem] z-[1] aspect-square overflow-hidden rounded-full sm:bottom-[0.8rem] sm:left-[0.8rem] sm:right-[0.8rem]">
              <img
                src={profileImage}
                alt={`${SITE.name} — ${t(SITE.role)}`}
                width={474}
                height={1024}
                className="absolute left-1/2 w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom"
                style={{ height: '168%', bottom: '-34%' }}
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[2] overflow-visible"
              style={{ clipPath: 'inset(0 0 42% 0)' }}
              aria-hidden="true"
            >
              <div className="absolute bottom-[0.55rem] left-[0.55rem] right-[0.55rem] aspect-square sm:bottom-[0.8rem] sm:left-[0.8rem] sm:right-[0.8rem]">
                <img
                  src={profileImage}
                  alt=""
                  width={474}
                  height={1024}
                  className="absolute left-1/2 w-auto max-w-none -translate-x-1/2 select-none object-contain object-bottom"
                  style={{ height: '168%', bottom: '-34%' }}
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#sobre"
        className="relative z-[3] mx-auto mb-4 inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-white/65 transition hover:text-[#1DB954] sm:mb-8 sm:gap-3 sm:text-xs sm:tracking-[0.44em]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <ArrowDown size={16} className="sm:hidden" aria-hidden="true" />
          <ArrowDown size={20} className="hidden sm:block" aria-hidden="true" />
        </motion.span>
        {t(hero.scrollDown)}
      </a>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] block h-3 w-full sm:h-6"
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
