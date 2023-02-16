import { ThemeContext } from '@/contexts/ThemeContext'
import { clsx as cx } from 'clsx'
import { useContext } from 'react'

const Header = () => {
  const { theme, toggleDarkMode } = useContext(ThemeContext)
  return (
    <section className="flex fixed top-0 w-full bg-gray-50 transition-colors duration-300 ease-linear backdrop-blur-md dark:bg-theme-100">
      <div className="flex justify-end items-center py-2 px-6 m-auto w-4/5 h-20">
        <button
          onClick={toggleDarkMode}
          className={cx(
            'text-2xl duration-300 ease-in-out transition-transform dark:hover:bg-sky-400',
            theme === 'dark'
              ? 'i-heroicons-moon-solid rotate-0'
              : 'i-heroicons-sun-20-solid rotate-[90deg]'
          )}
        ></button>
      </div>
   </section>
  )
}

export default Header
