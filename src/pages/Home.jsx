import { lazy, Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/layout/ScrollProgress'
import BackToTop from '@/components/layout/BackToTop'
import LoadingScreen from '@/components/layout/LoadingScreen'

const Skills = lazy(() => import('@/components/sections/Skills'))
const Experience = lazy(() => import('@/components/sections/Experience'))
const Services = lazy(() => import('@/components/sections/Services'))
const Contact = lazy(() => import('@/components/sections/Contact'))

function SectionFallback() {
  return (
    <div className="section-padding" aria-hidden="true">
      <div className="container-page h-40 animate-pulse rounded-2xl bg-[var(--card)]" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Suspense fallback={<SectionFallback />}>
          <Experience />
          <Services />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
