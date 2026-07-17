import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export default function Magnet({
  children,
  padding = 80,
  disabled = false,
  magnetStrength = 2.4,
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const isTouch = useMediaQuery('(hover: none)')
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const magnetRef = useRef(null)
  const isDisabled = disabled || reduceMotion || isTouch

  useEffect(() => {
    if (isDisabled) return undefined

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect()
      const centerX = left + width / 2
      const centerY = top + height / 2
      const distX = Math.abs(centerX - e.clientX)
      const distY = Math.abs(centerY - e.clientY)

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true)
        setPosition({
          x: (e.clientX - centerX) / magnetStrength,
          y: (e.clientY - centerY) / magnetStrength,
        })
      } else {
        setIsActive(false)
        setPosition({ x: 0, y: 0 })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [padding, isDisabled, magnetStrength])

  const offset = isDisabled ? { x: 0, y: 0 } : position

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          transition: isActive && !isDisabled
            ? 'transform 0.25s ease-out'
            : 'transform 0.45s ease-in-out',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}
