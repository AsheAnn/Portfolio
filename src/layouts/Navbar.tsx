import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Link, useLocation } from 'react-router-dom'
import { metadata } from '@/libs/metadata'

const Navbar = () => {
  const location = useLocation()

  return (
    <section className="relative z-10 w-full h-full">
      <div className="flex absolute top-0 right-0 flex-col justify-between items-end w-[87%] h-full text-2xl md:text-3xl font-NotoSans">
        <div className="h-1/2 flex flex-col gap-6 md:gap-12">
          <div className="relative font-thin text-right">
            <div className="pb-4 md:pb-0 ">
              <h1 className="tracking-wide md:text-8xl text-[61px] mt-3 md:mt-0">
                Ashe Ann
              </h1>
            </div>
            <div className="my-2 w-full transition-colors dark:bg-gray-50 h-[1px] bg-theme-100" />
            <div className="h-5 md:h-6 flex justify-end items-center">
              <p className="tracking-wider text-[10px] md:text-[15px]">
                Creative Developer / CGI Hobbyist / Audio-Visual Artist.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end md:gap-5">
            {metadata.routerLink.map((link) => {
              const isCurrentPath = location.pathname === link.href
              return (
                <Link to={link.href} key={link.title}>
                  <div>
                    {isCurrentPath ? (
                      <div className="h-9 bg-amber-400 md:h-11 hover:cursor-default i-heroicons-check-circle-20-solid"></div>
                    ) : (
                      <>
                        <div className="h-9 md:h-11 relative [&_.underline]:hover:w-full [&_.underline]:hover:bg-gray-400 hover:dark:text-gray-400  [&_.arraow]:opacity-0 [&_.arraow]:hover:opacity-100 [&_.arraow]:transition-opacity [&_.arraow]:duration-300 [&_.arraow]:ease-in">
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
      </div>
    </section>
  )
}

export default Navbar
