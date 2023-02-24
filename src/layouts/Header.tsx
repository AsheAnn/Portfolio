import { ThemeContext } from '@/contexts/ThemeContext'
import { clsx as cx } from 'clsx'
import { useContext } from 'react'

const Header = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext)

  return (
    <section className="flex fixed top-0 z-20 w-full h-32 duration-300 ease-linear dark:bg-gradient-to-b dark:from-theme-100 dark:to-transparent"></section>
  )
}

export default Header
