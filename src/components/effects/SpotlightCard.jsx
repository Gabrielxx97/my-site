import { useRef, useState } from 'react'

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(29, 185, 84, 0.18)',
}) {
  const divRef = useRef(null)
  const [isFocused, setIsFocused] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={() => {
        setIsFocused(true)
        setOpacity(0.7)
      }}
      onBlur={() => {
        setIsFocused(false)
        setOpacity(0)
      }}
      onMouseEnter={() => setOpacity(0.7)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
