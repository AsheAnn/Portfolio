import noise from '@/glsl/noise.glsl'
import resizeCanvas from '@/helpers/resizer'
import GlslCanvas from 'glslCanvas'
import { useEffect, useRef } from 'react'

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  useEffect(() => {
    const canvas = canvasRef
    const sandbox = new GlslCanvas(canvas.current)
    sandbox.load(noise)

    resizeCanvas(canvas?.current, 0, 0)
    addEventListener('resize', () => {
      resizeCanvas(canvas?.current, 1, 1)
    })
  }, [canvasRef])

  return (
    <section className="fixed z-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="object-cover absolute inset-0 w-full h-full opacity-30 transition-opacity dark:opacity-25"
      />
    </section>
  )
}

export default Background
