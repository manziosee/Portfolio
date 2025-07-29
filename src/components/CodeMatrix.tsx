import { useEffect, useRef } from 'react'

export function CodeMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const katakana = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums = '0123456789'
    const alphabet = katakana + latin + nums

    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    function draw() {
      if (!ctx || !canvas) return

      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#6366f1'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)
    return () => clearInterval(interval)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-20 h-full w-full"
    />
  )
}