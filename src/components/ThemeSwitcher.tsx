import { ThemeContext } from '@/contexts/ThemeContext'
import { clsx as cx } from 'clsx'
import { useContext } from 'react'

const ThemeSwitcher = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext)
  return (
    <button
      onClick={toggleDarkMode}
      className={cx(
        'text-2xl duration-300 ease-in-out transition-transform dark:hover:bg-sky-400',
        theme === 'dark'
          ? 'i-heroicons-moon-solid rotate-0'
          : 'i-heroicons-sun-20-solid rotate-[90deg]'
      )}
    ></button>
  )
}

export default ThemeSwitcher
