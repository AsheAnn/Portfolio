import { clsx as cx } from 'clsx'
import { useMounted } from '@/hooks/useMounted'
import { metadata } from '@/libs/metadata'
import { SocialLink } from '@/components/SocialLink'

const Projects = () => {
  const { isDiffPath } = useMounted()

  const workLinkStyle = cx(
    '[&_.role]:hover:translate-y-0 [&_.role]:hover:opacity-100',
    '[&_.year]:hover:translate-x-0 [&_.year]:hover:opacity-100',
    '[&_.underline]:hover:w-full [&_.underline]:hover:opacity-100'
  )

  return (
    <section className="relative w-full lg:w-[58%] h-full max-w-6xl">
      <div
        className={cx(
          isDiffPath ? '' : 'opacity-0',
          'duration-[1200ms] delay-75 ease-in-out text-lg tracking-wider w-full gap-3 md:gap-6 2xl:gap-9 h-full overflow-y-auto keep-scrolling flex flex-col-reverse'
        )}
      >
        {metadata.works.map((work) => {
          return (
            <div key={work.title} className={workLinkStyle}>
              <div className="inline-flex justify-between items-end w-full">
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-40"
                >
                  <span className="text-2xl italic md:text-5xl 2xl:text-7xl font-Cardo">
                    {work.title}
                  </span>
                </a>
                <p className="font-thin opacity-0 duration-500 ease-out delay-500 -translate-x-4 font-NotoSansf year">
                  {work.year}
                </p>
              </div>
              <div className="w-0 underline bg-gray-50 opacity-0 transition-all ease-linear pointer-events-none duration-500 h-[1px]"></div>
              <div className="inline-flex justify-between w-full pointer-events-none">
                <p className="text-xs md:text-sm font-thin opacity-0 duration-300 ease-in-out delay-100 -translate-y-4 font-NotoSans role">
                  {work.role}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
