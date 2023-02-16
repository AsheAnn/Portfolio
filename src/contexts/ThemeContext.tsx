import { createContext, PropsWithChildren, useMemo, useState } from 'react'

interface ThemeContextData {
  theme: string | undefined
  toggleDarkMode: () => void
}

export const ThemeContext = createContext({} as ThemeContextData)

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const systemTheme = useMemo(
    () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light',
    []
  )

  const storageKey = useMemo(() => localStorage.getItem('theme') || undefined, [])

  if (storageKey === undefined || null) {
    localStorage.setItem('theme', systemTheme)
  }

  const [theme, setTheme] = useState<string | undefined>(storageKey)

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
  }

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
    document.documentElement.style.colorScheme = 'light'
  }

  const value = {
    theme,
    toggleDarkMode
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
