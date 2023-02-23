import { useEffect, useState } from 'react'
import { clsx as cx } from 'clsx'

const IntroAnimaton = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    setTimeout(() => {
      setIsMounted(false)
    }, 3400)

    return () => setIsMounted(false)
  }, [])

  useEffect(() => {
    if (isMounted && !isAnimating) {
      setTimeout(() => {
        setIsAnimating(true)
      }, 200)
    } else {
      setTimeout(() => {
        setIsAnimating(false)
      }, 3900)
    }
  }, [isMounted, isAnimating])

  return (
    <div className="absolute top-0 left-0 z-30 w-full h-full pointer-events-none">
      <div
        className={cx(
          isMounted ? '' : 'opacity-0 -translate-y-20',
          'flex justify-center items-center w-full h-full bg-theme-100 duration-500 ease-in-out'
        )}
      >
        <div className="inline-flex gap-3 items-center text-4xl text-gray-200">
          <p
            className={cx(
              isAnimating ? '' : 'opacity-0 translate-x-7',
              'duration-150 delay-500 ease-in font-Cardo font-bold text-gray-50'
            )}
          >
            Ashe Ann
          </p>
          <div
            className={cx(
              isAnimating ? 'h-[54px]' : 'h-0 opacity-0 -translate-y-7',
              'duration-300 ease-in  w-[1px] bg-gray-50'
            )}
          ></div>
          <p
            className={cx(
              isAnimating ? '' : 'opacity-0 -translate-x-7',
              'duration-150 delay-700 ease-out font-Cardo font-light italic '
            )}
          >
            Portfolio
          </p>
        </div>
      </div>
    </div>
  )
}

export default IntroAnimaton
