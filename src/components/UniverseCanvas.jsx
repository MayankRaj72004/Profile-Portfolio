import { useEffect, useRef } from 'react'

/**
 * UniverseCanvas
 * Renders an animated starfield with twinkling stars and a slow nebula drift
 * directly inside the card (position: absolute, inset: 0, z-index: 0).
 * Wrap the card in position:relative and set children to z-index > 0.
 */
export default function UniverseCanvas({ starCount = 120, nebulaOpacity = 0.18 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animId
    let w = 0, h = 0

    /* ---------- Stars ---------- */
    const stars = []

    function buildStars() {
      stars.length = 0
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 1.4 + 0.3,
          alpha: Math.random(),
          speed: Math.random() * 0.008 + 0.004,   // twinkle speed
          phase: Math.random() * Math.PI * 2,
          // slow drift
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          // colour: mostly white/cyan, occasional gold
          hue: Math.random() < 0.8 ? 0 : Math.random() * 60,
          sat: Math.random() < 0.8 ? 0 : 60,
        })
      }
    }

    /* ---------- Nebula blobs ---------- */
    const blobs = [
      { cx: 0.2, cy: 0.3, rx: 0.35, ry: 0.25, hue: 220, phase: 0 },
      { cx: 0.75, cy: 0.65, rx: 0.3, ry: 0.22, hue: 260, phase: 1.1 },
      { cx: 0.5, cy: 0.5, rx: 0.25, ry: 0.2, hue: 40, phase: 2.2 },
    ]

    /* ---------- Resize ---------- */
    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = canvas.width = rect.width
      h = canvas.height = rect.height
      buildStars()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement)
    resize()

    /* ---------- Draw ---------- */
    let t = 0
    function draw() {
      ctx.clearRect(0, 0, w, h)

      // Nebula blobs
      blobs.forEach(b => {
        const drift = Math.sin(t * 0.0004 + b.phase) * 0.04
        const gx = (b.cx + drift) * w
        const gy = (b.cy + drift * 0.7) * h
        const rx = b.rx * w
        const ry = b.ry * h

        const grad = ctx.createRadialGradient(gx, gy, 0, gx, gy, Math.max(rx, ry))
        grad.addColorStop(0, `hsla(${b.hue},70%,55%,${nebulaOpacity})`)
        grad.addColorStop(1, 'transparent')
        ctx.save()
        ctx.scale(1, ry / rx)
        ctx.beginPath()
        ctx.arc(gx, gy * (rx / ry), rx, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      })

      // Stars
      stars.forEach(s => {
        s.phase += s.speed
        const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(s.phase))
        s.alpha = twinkle

        // drift
        s.x += s.vx
        s.y += s.vy
        if (s.x < 0) s.x = w
        if (s.x > w) s.x = 0
        if (s.y < 0) s.y = h
        if (s.y > h) s.y = 0

        // glow for bright stars
        if (s.r > 1.2) {
          ctx.beginPath()
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
          glow.addColorStop(0, `hsla(${s.hue},${s.sat}%,95%,${s.alpha * 0.6})`)
          glow.addColorStop(1, 'transparent')
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue},${s.sat}%,95%,${s.alpha})`
        ctx.fill()
      })

      t++
      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [starCount, nebulaOpacity])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        borderRadius: 'inherit',
        zIndex: 0,
      }}
    />
  )
}
