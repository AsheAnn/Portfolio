import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Link, useLocation } from 'react-router-dom'
import { socialMediaLink, routerLink } from '@/libs/metadata'

const Navbar = () => {
  const location = useLocation()

  return (
    <section className="relative z-10 w-full h-full">
      <div className="flex flex-col justify-between items-end h-full text-3xl font-NotoSans">
        <div className="flex flex-col gap-12">
          <div className="font-thin text-right">
            <h1 className="pb-2 text-8xl tracking-wide">Ashe Ann</h1>
            <div className="transition-colors dark:bg-gray-50 h-[1px] bg-theme-100" />
            <p className="tracking-wider text-[15px]">
              Creative Developer / CGI Hobbyist / Audio-Visual Artist.
            </p>
          </div>
          <div className="flex flex-col gap-6 items-end">
            {routerLink.map((link) => {
              const isCurrentPath = location.pathname === link.href
              return (
                <Link to={link.href} key={link.title}>
                  <div>
                    {isCurrentPath ? (
                      <div className="bg-amber-400 hover:cursor-default i-heroicons-check-circle-20-solid"></div>
                    ) : (
                      <>
                        <div className="relative [&_.underline]:hover:w-full [&_.underline]:hover:bg-gray-400 hover:dark:text-gray-400  [&_.arraow]:opacity-0 [&_.arraow]:hover:opacity-100 [&_.arraow]:transition-opacity [&_.arraow]:duration-300 [&_.arraow]:ease-in">
                          <div className="inline-flex gap-6 items-center">
                            <div className="i-heroicons-arrow-left arraow"></div>
                            <p className="dark:hover:text-gray-400">
                              {link.title}
                            </p>
                          </div>
                          <div className="absolute right-0 w-0 underline bg-gray-50 transition-all ease-linear h-[1px]"></div>
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="inline-flex gap-5 text-2xl">
          {socialMediaLink.map((link) => {
            return (
              <a
                href={link.href}
                key={link.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={link.icon}></div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Navbar
