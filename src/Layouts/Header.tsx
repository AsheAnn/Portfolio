import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLink = [
  { title: 'About', path: '/about' },
  { title: 'Projects', path: '/projects' },
  { title: 'Contact', path: '/contact' }
]

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleDarkMode = () => setIsDark((isDark) => !isDark)

  return (
    <section className="flex fixed top-0 w-full bg-gray-50/50 backdrop-blur-md">
      <div className="flex justify-between items-center py-2 px-6 m-auto w-4/5 h-20">
        <Link to="/">
          <div>AshΞAnn</div>
        </Link>
        <div className="flex justify-between w-[16rem]">
          {navLink.map((link) => (
            <Link to={link.path} key={link.title}>
              <div>{link.title}</div>
            </Link>
          ))}
          <button className="text-2xl i-heroicons-sun-20-solid"></button>
        </div>
      </div>
    </section>
  )
}

export default Header
