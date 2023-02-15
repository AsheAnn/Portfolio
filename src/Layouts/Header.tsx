import { clsx as cx } from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const navLink = [
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' }
]

const Header = () => {
  const [isDark, setIsDark] = useState(true)
  const toggleDarkMode = () => {
    setIsDark((isDark) => !isDark)
    localStorage.setItem('isDark', JSON.stringify(!isDark))
  }
  const isDarkMode = JSON.parse(localStorage.getItem('isDark') || 'false')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    return () => document.documentElement.classList.remove('dark')
  }, [isDarkMode])

  return (
    <section className="flex fixed top-0 w-full bg-gray-50 transition-all duration-300 ease-linear backdrop-blur-md dark:bg-theme-100">
      <div className="flex justify-between items-center py-2 px-6 m-auto w-4/5 h-20">
        <Link to="/">
          <div>AshΞAnn</div>
        </Link>
        <div className="flex justify-between items-center w-[18rem]">
          {navLink.map((link) => (
            <Link to={link.path} key={link.title} className="dark:hover:bg-gray-700 py-1 px-2 rounded-md">
              <div>{link.title}</div>
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className={cx(
              'text-2xl duration-300 ease-in-out transition-transform dark:hover:bg-sky-400',
              isDarkMode
                ? 'i-heroicons-moon-solid rotate-0'
                : 'i-heroicons-sun-20-solid rotate-[90deg]'
            )}
          ></button>
        </div>
      </div>
    </section>
  )
}

export default Header
