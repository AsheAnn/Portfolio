import { useMounted } from '@/hooks/useMounted'
import { clsx as cx } from 'clsx'


const Home = () => {
  const { isDiffPath } = useMounted()

  return (
    <section className="relative w-full h-full">
      <div className="absolute bottom-0 w-full">
        <div
          className={cx(
            isDiffPath ? '' : 'opacity-0',
            'duration-[1200ms] delay-75 ease-in-out text-lg tracking-wider'
          )}
        >
          <p>Sense and Sensibility</p>
          <div
            className={cx(
              'transition-all duration-1000 ease-in-out delay-75 dark:bg-gray-50 h-[1px] bg-theme-100',
              isDiffPath ? 'w-1/3 ' : 'w-0'
            )}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Home
