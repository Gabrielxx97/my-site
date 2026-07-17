import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return 'pt'
    return localStorage.getItem('language') || 'pt'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  const t = useMemo(
    () => (value) => {
      if (value == null) return ''
      if (typeof value === 'string') return value
      return value[language] ?? value.pt ?? value.en ?? ''
    },
    [language],
  )

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'pt' ? 'en' : 'pt'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
