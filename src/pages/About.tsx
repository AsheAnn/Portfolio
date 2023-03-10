import { clsx as cx } from 'clsx'
import { useMounted } from '@/hooks/useMounted'
import { metadata } from '@/libs/metadata'
import TypeWriteEffect from '@/components/TypeWriteEffect'
import { useContext, useEffect, useState } from 'react'
import { LoadingContext } from '@/contexts/LoadingContext'
import SocialLinkList from '@/components/SocialLink'

const TypeWriteSentence: React.FC<{
  data: string[]
  isMounted: boolean
}> = ({ data, isMounted }) => {
  const [sentenceId, setSentenceId] = useState(0)
  const storageKey =
    JSON.parse(sessionStorage.getItem('isTyped') as string) || false
  if (storageKey === undefined || storageKey === false) {
    sessionStorage.setItem('isTyped', 'false')
  }

  const [isTyped, setIsTyped] = useState(storageKey)

  const handleSentenceTyped = () => {
    if (!isMounted && sentenceId < data.length) {
      setSentenceId(sentenceId + 1)
    }
  }

  useEffect(() => {
    if (sentenceId === data.length) {
      setIsTyped(true)
      sessionStorage.setItem('isTyped', 'true')
    }
  }, [data, sentenceId])

  return (
    <div
      className={cx(
        'grid w-full h-full text-xs lg:text-sm lg:leading-9 transition-all duration-150 ease-in-out',
        gridMapper[sentenceId.toString()]
      )}
    >
      {data.slice(0, 1 + sentenceId).map((sentence, idx) => (
        <TypeWriteEffect
          isMounted={isMounted}
          delay={100}
          key={`sen-${idx}`}
          text={sentence}
          isBegin={idx === sentenceId && !isTyped}
          onSentenceTyped={idx === sentenceId ? handleSentenceTyped : undefined}
          isTyped={isTyped}
        />
      ))}
    </div>
  )
}

const About = () => {
  const { isDiffPath } = useMounted()
  const { isMounted } = useContext(LoadingContext)

  return (
    <section className="relative w-full h-full">
      <div className="absolute bottom-5 md:bottom-0 left-0 w-full h-full block md:flex md:justify-between md:items-end gap-3">
        <div
          className={cx(
            isDiffPath ? '' : 'opacity-0',
            'pb-2 md:pb-0 duration-[1200ms] delay-75 ease-in-out tracking-wider w-full h-full flex items-end'
          )}
        >
          <div className="w-full md:w-[81%]">
            <TypeWriteSentence isMounted={isMounted} data={metadata.intro} />
            <div
              className={cx(
                'transition-all duration-1000 ease-in-out delay-75 dark:bg-gray-50 h-[1px] bg-theme-100 mt-2 md:mt-4',
                isDiffPath ? 'w-full' : 'w-0'
              )}
            />
          </div>
        </div>
        <div
          className={cx(
            isDiffPath ? '' : ' opacity-0',
            'duration-[1200ms] delay-75 ease-in-out tracking-wider text-xl md:text-2xl inline-flex items-end gap-3 md:gap-5 relative z-30'
          )}
        >
          <SocialLinkList />
        </div>
      </div>
    </section>
  )
}

export default About


const gridMapper: { [key: string]: string } = {
  '1': 'grid-row-1',
  '2': 'grid-row-2',
  '3': 'grid-row-3'
}
