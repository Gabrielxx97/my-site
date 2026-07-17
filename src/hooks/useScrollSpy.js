import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] || '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.1, 0.25, 0.5],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids, offset])

  return activeId
}
