import { clsx as cx } from 'clsx'
import { useState } from 'react'

const socialMediaLink = [
  { name: 'website', href: '' },
  { name: 'instagram', href: '' },
  { name: 'opensea', href: '' },
  { name: 'twitter', href: '' }
]

const Home = () => {
  const [isShow, setIsShow] = useState(false)
  const onTrigger = () => setIsShow((isShow) => !isShow)

  return (
    <section className="flex justify-center items-center w-full h-full">
      <div className="py-20">
        <button
          onClick={onTrigger}
          className="w-20 h-20 bg-gray-500 rounded-sm"
        ></button>

        <div className={cx(isShow ? 'h-72' : 'h-0 opacity-0', )}>

        </div>
      </div>
    </section>
  )
}

export default Home
