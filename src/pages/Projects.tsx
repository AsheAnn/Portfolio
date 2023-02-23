import { clsx as cx } from 'clsx'
import { useMounted } from '@/hooks/useMounted'

const Projects = () => {
  const { isDiffPath } = useMounted()

  return (
    <section className="relative w-full h-full">
      <div
        className={cx(
          isDiffPath ? '' : 'opacity-0',
          'duration-[1200ms] delay-75 ease-in-out text-lg tracking-wider'
        )}
      >
        <p>I&apos;m Ashe. </p>
        <div
          className={cx(
            'transition-all duration-1000 ease-in-out delay-75 dark:bg-gray-50 h-[1px] bg-theme-100',
            isDiffPath ? 'w-1/3 ' : 'w-0'
          )}
        ></div>
      </div>
    </section>
  )
}

export default Projects
