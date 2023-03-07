import { useEffect, useState } from 'react'
import { clsx as cx } from 'clsx'

interface TypeWriteEffectProps {
  text: string
  delay?: number
  cursor?: string
  cursorDelay?: number
  isBegin?: boolean
  isMounted: boolean
  isTyped?: boolean
  onSentenceTyped?: () => void
}

const TypeWriteEffect: React.FC<TypeWriteEffectProps> = ({
  text,
  delay = 120,
  isBegin,
  isMounted,
  isTyped,
  onSentenceTyped
}) => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined
    if (currentIndex < text.length && !isMounted && isBegin) {
      setShowCursor(true)
      intervalId = setInterval(() => {
        setIsShow(true)
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, delay)
    } else {
      if (onSentenceTyped) {
        onSentenceTyped?.()
      }
      setShowCursor(false)
    }

    return () => clearInterval(intervalId)
  }, [delay, text, isBegin, currentIndex, isMounted, onSentenceTyped])

  return (
    <>
      {isTyped ? (
        <div className="inline-flex gap-3 items-center w-full h-14 md:h-10 tracking-[0.08rem]">
          <div>
            {text}
            <span
              className={cx(
                'dark:text-gray-50 ease-linear duration-100',
                showCursor ? '' : 'opacity-0'
              )}
            >
              ❚
            </span>
          </div>
        </div>
      ) : (
        <div
          className={cx(
            isShow ? 'h-14 lg:h-10' : 'text-opacity-0 h-0',
            'transition-all duration-300 ease-in-out inline-flex gap-3 items-center w-full tracking-[0.3rem]'
          )}
        >
          <div>
            {displayText}
            <span
              className={cx(
                'dark:text-gray-50 ease-linear duration-100 pl-1',
                showCursor ? '' : 'opacity-0'
              )}
            >
              ❚
            </span>
          </div>
        </div>
      )}
    </>
  )
}

export default TypeWriteEffect
