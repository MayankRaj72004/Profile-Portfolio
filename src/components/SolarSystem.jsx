import { useEffect, useRef } from 'react'

/**
 * CosmosBackground
 * ─────────────────────────────────────────────────────────────────────────────
 * Full-screen fixed canvas featuring:
 *  • Deep starfield with parallax layers & twinkling
 *  • 3 independent solar systems at different scales / positions
 *  • Each system: glowing sun + up to 8 planets on tilted elliptical orbits
 *  • Comet tails on each planet
 *  • Saturn-style ring on one planet per system
 *  • Shooting stars (random)
 *  • Colorful nebula / gas cloud blobs
 *  • Subtle radial depth-fog vignette
 */
export default function CosmosBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId, W, H

    // ── resize ──────────────────────────────────────────────────────────────
    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── util ────────────────────────────────────────────────────────────────
    const rand = (a, b) => a + Math.random() * (b - a)
    function hexRgb(hex) {
      const h = parseInt(hex.replace('#', ''), 16)
      return [(h >> 16) & 255, (h >> 8) & 255, h & 255]
    }
    function lighten(hex, t) {
      const [r, g, b] = hexRgb(hex)
      return `rgb(${Math.min(255, r + t * 255)},${Math.min(255, g + t * 255)},${Math.min(255, b + t * 255)})`
    }
    function rgba(hex, a) {
      const [r, g, b] = hexRgb(hex)
      return `rgba(${r},${g},${b},${a})`
    }

    // ── 3-layer starfield ────────────────────────────────────────────────────
    const LAYERS = [
      { count: 180, rMax: 1.0, speed: 0.003, alpha: 0.55 },
      { count: 120, rMax: 1.4, speed: 0.007, alpha: 0.75 },
      { count:  60, rMax: 2.0, speed: 0.012, alpha: 0.90 },
    ]
    const stars = LAYERS.flatMap(l =>
      Array.from({ length: l.count }, () => ({
        x: rand(0, 1), y: rand(0, 1),          // relative coords
        r: rand(0.2, l.rMax),
        phase: rand(0, Math.PI * 2),
        speed: l.speed,
        baseAlpha: l.alpha,
      }))
    )

    // ── nebula blobs ─────────────────────────────────────────────────────────
    const NEBULAE = [
      { cx: 0.15, cy: 0.25, rx: 0.22, ry: 0.15, hue: 240, sat: 70, lit: 55, a: 0.10, phase: 0 },
      { cx: 0.80, cy: 0.20, rx: 0.18, ry: 0.12, hue: 290, sat: 65, lit: 60, a: 0.08, phase: 1.5 },
      { cx: 0.65, cy: 0.78, rx: 0.20, ry: 0.13, hue: 190, sat: 70, lit: 55, a: 0.09, phase: 3.0 },
      { cx: 0.30, cy: 0.70, rx: 0.16, ry: 0.11, hue: 20,  sat: 80, lit: 55, a: 0.07, phase: 4.5 },
      { cx: 0.50, cy: 0.45, rx: 0.24, ry: 0.16, hue: 150, sat: 55, lit: 50, a: 0.06, phase: 2.0 },
    ]

    // ── solar system factory ─────────────────────────────────────────────────
    const SYSTEM_TEMPLATES = [
      {
        // main — large, centre-left
        sunPos: { x: 0.38, y: 0.50 },
        sunR: 0.030,
        sunColor: '#fff7a0',
        sunCore: '#ffe566',
        sunGlow: '#ff9900',
        planets: [
          { color:'#c8c8c8', r:0.006, orbitX:0.08, orbitY:0.042, speed:0.052, angle:0.0,  tilt: 4, tail:22 },
          { color:'#e8cda0', r:0.008, orbitX:0.13, orbitY:0.068, speed:0.038, angle:1.3,  tilt:-3, tail:24 },
          { color:'#4fa3e0', r:0.009, orbitX:0.19, orbitY:0.097, speed:0.031, angle:2.6,  tilt: 5, tail:26 },
          { color:'#c1440e', r:0.007, orbitX:0.25, orbitY:0.127, speed:0.025, angle:0.9,  tilt:-6, tail:22 },
          { color:'#c88b3a', r:0.016, orbitX:0.34, orbitY:0.168, speed:0.014, angle:4.0,  tilt: 3, tail:30, ring:true },
          { color:'#e4d191', r:0.013, orbitX:0.42, orbitY:0.207, speed:0.010, angle:5.2,  tilt:-5, tail:28 },
          { color:'#7de8e8', r:0.011, orbitX:0.49, orbitY:0.242, speed:0.007, angle:1.8,  tilt: 7, tail:24 },
          { color:'#5b6ee1', r:0.010, orbitX:0.56, orbitY:0.275, speed:0.005, angle:3.1,  tilt:-4, tail:20 },
        ],
      },
      {
        // secondary — smaller, top-right
        sunPos: { x: 0.80, y: 0.22 },
        sunR: 0.018,
        sunColor: '#ffe0e0',
        sunCore: '#ff8888',
        sunGlow: '#cc2200',
        planets: [
          { color:'#ffaacc', r:0.005, orbitX:0.06, orbitY:0.032, speed:0.060, angle:0.5, tilt: 8,  tail:18 },
          { color:'#ff7755', r:0.007, orbitX:0.105,orbitY:0.055, speed:0.042, angle:2.0, tilt:-4,  tail:20, ring:true },
          { color:'#ffd966', r:0.006, orbitX:0.15, orbitY:0.078, speed:0.030, angle:3.8, tilt: 3,  tail:18 },
          { color:'#cc88ff', r:0.008, orbitX:0.20, orbitY:0.103, speed:0.021, angle:1.1, tilt:-7,  tail:22 },
          { color:'#88ffcc', r:0.007, orbitX:0.26, orbitY:0.132, speed:0.015, angle:5.0, tilt: 5,  tail:20 },
        ],
      },
      {
        // tertiary — tiny, bottom-left
        sunPos: { x: 0.12, y: 0.80 },
        sunR: 0.014,
        sunColor: '#d0f0ff',
        sunCore: '#88ddff',
        sunGlow: '#0088cc',
        planets: [
          { color:'#aaddff', r:0.005, orbitX:0.055,orbitY:0.030, speed:0.055, angle:1.0, tilt: 6,  tail:16 },
          { color:'#ffffff', r:0.006, orbitX:0.095,orbitY:0.050, speed:0.038, angle:3.2, tilt:-5,  tail:18 },
          { color:'#66bbff', r:0.007, orbitX:0.138,orbitY:0.072, speed:0.026, angle:0.3, tilt: 4,  tail:18, ring:true },
          { color:'#99eeff', r:0.006, orbitX:0.180,orbitY:0.094, speed:0.018, angle:4.7, tilt:-3,  tail:16 },
        ],
      },
    ]

    // Build live system state
    const systems = SYSTEM_TEMPLATES.map(tmpl => ({
      ...tmpl,
      planets: tmpl.planets.map(p => ({
        ...p,
        _tail: [],
      })),
    }))

    // ── shooting stars ───────────────────────────────────────────────────────
    const shooters = []
    function spawnShooter() {
      const edge = Math.random() < 0.5 ? 0 : 1
      shooters.push({
        x: edge === 0 ? rand(-50, 0) : rand(W + 10, W + 60),
        y: rand(0, H * 0.6),
        vx: rand(6, 14) * (edge === 0 ? 1 : -1),
        vy: rand(2, 6),
        life: 1.0,
        decay: rand(0.012, 0.022),
        len: rand(80, 160),
        r: rand(0.5, 1.5),
        color: [`#ffffff`, `#ffd580`, `#aaddff`, `#ffbbdd`][Math.floor(rand(0, 4))],
      })
    }
    let shooterTimer = 0

    // ── planet position ──────────────────────────────────────────────────────
    function ppos(p, sunX, sunY) {
      const tRad = (p.tilt * Math.PI) / 180
      const c = Math.cos(tRad), s = Math.sin(tRad)
      const ex = p.orbitX * W * Math.cos(p.angle)
      const ey = p.orbitY * H * Math.sin(p.angle)
      return { x: sunX + ex * c - ey * s, y: sunY + ex * s + ey * c }
    }

    // ── draw nebula ──────────────────────────────────────────────────────────
    function drawNebula(t) {
      NEBULAE.forEach(n => {
        const drift = Math.sin(t * 0.00025 + n.phase) * 0.015
        const gx = (n.cx + drift) * W
        const gy = (n.cy + drift * 0.7) * H
        const rx = n.rx * W, ry = n.ry * H
        const maxR = Math.max(rx, ry)
        ctx.save()
        ctx.scale(1, ry / rx)
        const g = ctx.createRadialGradient(gx, gx * (ry / rx) * 0, 0, gx, gy * (rx / ry), maxR)
        g.addColorStop(0, `hsla(${n.hue},${n.sat}%,${n.lit}%,${n.a * 1.4})`)
        g.addColorStop(0.5, `hsla(${n.hue},${n.sat}%,${n.lit}%,${n.a * 0.7})`)
        g.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.ellipse(gx, gy * (rx / ry), rx, rx, 0, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
        ctx.restore()
      })
    }

    // ── draw sun ─────────────────────────────────────────────────────────────
    function drawSun(sys, pulseFactor) {
      const { sunPos, sunR, sunColor, sunCore, sunGlow } = sys
      const sx = sunPos.x * W, sy = sunPos.y * H
      const R = sunR * Math.min(W, H)

      // outer mega-glow
      const g1 = ctx.createRadialGradient(sx, sy, 0, sx, sy, R * 5)
      g1.addColorStop(0, rgba(sunGlow, 0.22 + pulseFactor * 0.08))
      g1.addColorStop(0.5, rgba(sunGlow, 0.08))
      g1.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(sx, sy, R * 5, 0, Math.PI * 2)
      ctx.fillStyle = g1
      ctx.fill()

      // mid glow
      const g2 = ctx.createRadialGradient(sx, sy, 0, sx, sy, R * 2.2)
      g2.addColorStop(0, rgba(sunColor, 0.5))
      g2.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(sx, sy, R * 2.2, 0, Math.PI * 2)
      ctx.fillStyle = g2
      ctx.fill()

      // corona flares (4 spike overlays)
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2 + pulseFactor * 0.8
        ctx.save()
        ctx.translate(sx, sy)
        ctx.rotate(angle)
        const fg = ctx.createLinearGradient(0, 0, R * 3.5, 0)
        fg.addColorStop(0, rgba(sunCore, 0.35))
        fg.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.moveTo(0, -R * 0.3)
        ctx.lineTo(R * 3.5, 0)
        ctx.lineTo(0, R * 0.3)
        ctx.fillStyle = fg
        ctx.fill()
        ctx.restore()
      }

      // sun body
      const g3 = ctx.createRadialGradient(sx - R * 0.25, sy - R * 0.25, R * 0.05, sx, sy, R)
      g3.addColorStop(0, '#ffffff')
      g3.addColorStop(0.25, sunColor)
      g3.addColorStop(0.7, sunCore)
      g3.addColorStop(1, sunGlow)
      ctx.beginPath()
      ctx.arc(sx, sy, R * (1 + pulseFactor * 0.03), 0, Math.PI * 2)
      ctx.fillStyle = g3
      ctx.fill()
    }

    // ── draw orbit ring ───────────────────────────────────────────────────────
    function drawOrbitRing(p, sunX, sunY) {
      ctx.save()
      ctx.translate(sunX, sunY)
      ctx.rotate((p.tilt * Math.PI) / 180)
      ctx.beginPath()
      ctx.ellipse(0, 0, p.orbitX * W, p.orbitY * H, 0, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'
      ctx.lineWidth = 1
      ctx.stroke()
      ctx.restore()
    }

    // ── draw planet ───────────────────────────────────────────────────────────
    function drawPlanet(p, sunX, sunY) {
      const pos = ppos(p, sunX, sunY)
      const R = p.r * Math.min(W, H)

      // advance tail
      p._tail.push({ ...pos })
      if (p._tail.length > p.tail) p._tail.shift()

      // draw tail
      p._tail.forEach((tp, ti) => {
        const frac = ti / p._tail.length
        const ta = frac * 0.5
        ctx.beginPath()
        ctx.arc(tp.x, tp.y, R * frac * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = rgba(p.color, ta)
        ctx.fill()
      })

      // halo
      const gh = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, R * 3)
      gh.addColorStop(0, rgba(p.color, 0.35))
      gh.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, R * 3, 0, Math.PI * 2)
      ctx.fillStyle = gh
      ctx.fill()

      // Saturn ring (before body so body draws on top)
      if (p.ring) {
        ctx.save()
        ctx.translate(pos.x, pos.y)
        ctx.scale(1, 0.32)
        ;[[2.4, 5, 0.40], [3.1, 2.5, 0.22], [3.8, 1.5, 0.12]].forEach(([mult, lw, al]) => {
          ctx.beginPath()
          ctx.arc(0, 0, R * mult, 0, Math.PI * 2)
          ctx.strokeStyle = rgba(p.color, al)
          ctx.lineWidth = lw
          ctx.stroke()
        })
        ctx.restore()
      }

      // atmosphere shimmer
      const ga = ctx.createRadialGradient(pos.x, pos.y, R * 0.7, pos.x, pos.y, R * 1.35)
      ga.addColorStop(0, 'transparent')
      ga.addColorStop(1, rgba(p.color, 0.2))
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, R * 1.35, 0, Math.PI * 2)
      ctx.fillStyle = ga
      ctx.fill()

      // body gradient
      const gb = ctx.createRadialGradient(pos.x - R * 0.3, pos.y - R * 0.3, R * 0.05, pos.x, pos.y, R)
      gb.addColorStop(0, lighten(p.color, 0.55))
      gb.addColorStop(0.6, p.color)
      gb.addColorStop(1, rgba(p.color, 0.7))
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, R, 0, Math.PI * 2)
      ctx.fillStyle = gb
      ctx.fill()

      // specular highlight
      ctx.beginPath()
      ctx.arc(pos.x - R * 0.28, pos.y - R * 0.28, R * 0.28, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.18)'
      ctx.fill()
    }

    // ── main render loop ──────────────────────────────────────────────────────
    let t = 0
    function draw() {
      t++
      ctx.clearRect(0, 0, W, H)

      // — nebulae —
      drawNebula(t)

      // — stars —
      stars.forEach(s => {
        s.phase += s.speed
        const alpha = s.baseAlpha * (0.4 + 0.6 * (0.5 + 0.5 * Math.sin(s.phase)))
        const x = s.x * W, y = s.y * H
        // subtle glow for larger stars
        if (s.r > 1.2) {
          const sg = ctx.createRadialGradient(x, y, 0, x, y, s.r * 3)
          sg.addColorStop(0, `rgba(255,255,255,${alpha * 0.5})`)
          sg.addColorStop(1, 'transparent')
          ctx.beginPath()
          ctx.arc(x, y, s.r * 3, 0, Math.PI * 2)
          ctx.fillStyle = sg
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha})`
        ctx.fill()
      })

      // — shooting stars —
      shooterTimer++
      if (shooterTimer > rand(80, 200)) { spawnShooter(); shooterTimer = 0 }
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i]
        s.x += s.vx; s.y += s.vy; s.life -= s.decay
        if (s.life <= 0) { shooters.splice(i, 1); continue }
        const angle = Math.atan2(s.vy, s.vx)
        const tx = s.x - Math.cos(angle) * s.len * s.life
        const ty = s.y - Math.sin(angle) * s.len * s.life
        const sg = ctx.createLinearGradient(tx, ty, s.x, s.y)
        sg.addColorStop(0, 'transparent')
        sg.addColorStop(1, s.color.replace(')', `,${s.life})`).replace('#', 'rgba(').replace('rgba(', 'rgba(')
          // safer approach:
        )
        // use rgba helper properly
        const [r2, g2, b2] = hexRgb(s.color)
        const sg2 = ctx.createLinearGradient(tx, ty, s.x, s.y)
        sg2.addColorStop(0, 'transparent')
        sg2.addColorStop(1, `rgba(${r2},${g2},${b2},${s.life * 0.9})`)
        ctx.beginPath()
        ctx.moveTo(tx, ty)
        ctx.lineTo(s.x, s.y)
        ctx.strokeStyle = sg2
        ctx.lineWidth = s.r
        ctx.stroke()
        // head dot
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r2},${g2},${b2},${s.life})`
        ctx.fill()
      }

      // — solar systems —
      const pulseFactor = 0.5 + 0.5 * Math.sin(t * 0.03)

      systems.forEach(sys => {
        const sx = sys.sunPos.x * W, sy = sys.sunPos.y * H
        // orbit rings first (behind everything)
        sys.planets.forEach(p => drawOrbitRing(p, sx, sy))
        // sun
        drawSun(sys, pulseFactor)
        // planets (advance angle + draw)
        sys.planets.forEach(p => {
          p.angle += p.speed * 0.012
          drawPlanet(p, sx, sy)
        })
      })

      // — vignette (depth fog) —
      const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H)
      vig.addColorStop(0, 'transparent')
      vig.addColorStop(1, 'rgba(5,5,15,0.55)')
      ctx.fillStyle = vig
      ctx.fillRect(0, 0, W, H)

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
