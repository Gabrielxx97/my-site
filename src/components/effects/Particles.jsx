import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Particles({
  className = '',
  quantity = 36,
  color = '29, 185, 84',
}) {
  const canvasRef = useRef(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return undefined

    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d', { alpha: true })
    let animationId
    let particles = []
    let width = 0
    let height = 0

    const resize = () => {
      const parent = canvas.parentElement
      width = parent?.clientWidth || window.innerWidth
      height = parent?.clientHeight || window.innerHeight
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      particles = Array.from({ length: quantity }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        a: Math.random() * 0.35 + 0.1,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color}, ${p.a})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [quantity, color, reduceMotion])

  if (reduceMotion) return null

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    />
  )
}
