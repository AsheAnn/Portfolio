const resizeCanvas = (
  canvas: HTMLCanvasElement | null,
  widthOffset: number,
  heightOffset: number
) => {
  const windowHeight = window.innerHeight
  const windowWidth = window.innerWidth
  const dpi = window.devicePixelRatio

  const size = Math.max(windowWidth + heightOffset, windowHeight + widthOffset)

  if (canvas !== null) {
    canvas.width = size + dpi
    canvas.height = size + dpi
    canvas.style.width = `${size}px`
    canvas.style.height = `${size}px`
  }
}

export default resizeCanvas
