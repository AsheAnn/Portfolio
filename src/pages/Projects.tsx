import { clsx as cx } from 'clsx'
import { useMounted } from '@/hooks/useMounted'
import { metadata } from '@/libs/metadata'
import { SocialLink } from '@/components/SocialLink'

const Projects = () => {
  const { isDiffPath } = useMounted()

  return (
    <section className="relative w-[58%] h-full max-w-6xl">
      <div
        className={cx(
          isDiffPath ? '' : 'opacity-0',
          'duration-[1200ms] delay-75 ease-in-out text-lg tracking-wider w-full gap-9 h-full overflow-y-auto keep-scrolling flex flex-col-reverse'
        )}
      >
        {metadata.works.map((work) => {
          return (
            <div key={work.title} className="flex flex-col gap-1">
              <SocialLink
                href={work.href}
                isTarget={true}
                className="relative z-30 "
              >
                <p className="italic md:text-7xl font-Cardo">{work.title}</p>
              </SocialLink>
              {/* <div */}
              {/*   className={cx( */}
              {/*     'transition-all duration-1000 ease-in-out delay-75 dark:bg-gray-50 h-[1px] bg-theme-100', */}
              {/*     isDiffPath ? 'w-full ' : 'w-0' */}
              {/*   )} */}
              {/* /> */}
              {/* <div className="inline-flex justify-between w-full"> */}
              {/*   <p>{work.role}</p> */}
              {/*   <p>{work.year}</p> */}
              {/* </div> */}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
