import { LoadingContext } from '@/contexts/LoadingContext'
import noise from '@/glsl/noise.glsl'
import simpleNoise from '@/glsl/simpleNoise.glsl'
import resizeCanvas from '@/helpers/resizer'
import GlslCanvas from 'glslCanvas'
import { useContext, useEffect, useRef, useState } from 'react'
import { clsx as cx } from 'clsx'

const Background = () => {
  const { isMounted } = useContext(LoadingContext)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const canvas = canvasRef
    const sandbox = new GlslCanvas(canvas.current)
    if (!isMounted) {
      setTimeout(() => {
        sandbox.load(noise)
        setIsLoading(true)
      }, 500);
    }

    resizeCanvas(canvas?.current, 1, 1)
    addEventListener('resize', () => {
      resizeCanvas(canvas?.current, 1, 1)
    })
  }, [canvasRef, isMounted])

  return (
    <section
      className={cx('fixed z-0 w-full h-full duration-[3000ms] ease-in-out', isLoading ? '' : 'opacity-0')}
    >
      <canvas
        ref={canvasRef}
        className="object-cover absolute inset-0 w-full h-full opacity-30 transition-opacity dark:opacity-25"
      />
    </section>
  )
}

export default Background
