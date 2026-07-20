import { lazy, Suspense, useCallback, useState } from 'react'
import { ArrowDown, ArrowDownRight, Download, Mail } from 'lucide-react'
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
  const { t, language } = useLanguage()
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

      {/* z-2 — content (events bubble to section → PixelBlast) */}
      <div className="container-page relative z-[2] grid min-h-0 w-full flex-1 content-center items-center gap-6 bg-transparent md:gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative max-w-2xl bg-transparent">
          <motion.p
            className="mb-2 text-sm font-bold uppercase tracking-[0.28em] text-white/85"
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
              className="hero-title mt-1 w-full text-white/95"
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
            className="mt-2 space-y-1"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Shuffle
              text={t(SITE.role)}
              tag="p"
              className="hero-subtitle font-sans uppercase tracking-[0.14em] text-white/85" 
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

          {/* <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
          > */}
            {/* <Button href="#servicos" disableMotion>
              {t(hero.ctaProjects)}
              <ArrowDownRight size={16} aria-hidden="true" />
            </Button> */}
            
          {/* </motion.div> */}

          <motion.div
            className="mt-2 flex flex-wrap items-center gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {heroSocials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white/80 backdrop-blur-sm transition hover:border-[#1DB954] hover:bg-[#1DB954]/10 hover:text-[#1DB954]"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
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
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto flex w-full max-w-[22rem] items-center justify-center overflow-visible bg-transparent sm:max-w-[26rem] lg:max-w-none lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/*
            Pop-out da referência:
            - aro verde atrás
            - corpo clipado no círculo INTERNO do aro
            - camada da cabeça (topo) sem clip circular → sai por cima
          */}
          <div
            className="hero-portrait relative mx-auto w-[min(100%,16.5rem)] overflow-visible sm:w-[min(100%,19rem)] lg:mx-0 lg:w-[min(100%,22rem)]"
            style={{ aspectRatio: '1 / 1.5' }}
          >
            {/* glow */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 aspect-square w-full rounded-full opacity-50 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />

            {/* 1º aro */}
            <div
              className="absolute bottom-0 left-0 z-0 aspect-square w-full rounded-full p-[0.8rem]"
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

            {/* corpo: só o disco interno — enquadramento cintura → cima */}
            <div className="absolute bottom-[0.8rem] left-[0.8rem] right-[0.8rem] z-[1] aspect-square overflow-hidden rounded-full">
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

            {/* cabeça: mesma foto, só a faixa superior (ultrapassa o aro) */}
            <div
              className="pointer-events-none absolute inset-0 z-[2] overflow-visible"
              style={{ clipPath: 'inset(0 0 42% 0)' }}
              aria-hidden="true"
            >
              <div className="absolute bottom-[0.8rem] left-[0.8rem] right-[0.8rem] aspect-square">
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
        className="relative z-[3] mx-auto mb-8 inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.44em] text-white/65 transition hover:text-[#1DB954]"
      >
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <ArrowDown size={20} aria-hidden="true" />
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