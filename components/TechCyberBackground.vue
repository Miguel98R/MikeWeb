<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animationFrameId: number | null = null

interface BinaryDrop {
  x: number
  y: number
  text: string
  opacity: number
  maxOpacity: number
  speedY: number
  fadeSpeed: number
  color: string
  glowColor: string
  size: number
}

interface CircuitLine {
  startX: number
  startY: number
  midX: number
  midY: number
  endX: number
  endY: number
  progress: number
  speed: number
  color: string
  glowColor: string
  nodeRadius: number
  life: number
  maxLife: number
}

const BINARY_SAMPLES = [
  '01001101', '01101001', '01101011', '01100101',
  '01010010', '01101111', '01110011', '01100001',
  '0x7F', '0x2A', '0xFF', '0x3C', '10110010',
  '01000001', '01010111', '01010011', '11001010',
  'const ai = true', '10101100', '0xDEADBEEF', '01110100'
]

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = window.innerWidth)
  let height = (canvas.height = window.innerHeight)

  const handleResize = () => {
    if (!canvas) return
    width = canvas.width = window.innerWidth
    height = canvas.height = window.innerHeight
  }

  window.addEventListener('resize', handleResize)

  // Floating binary particles (vibrant and clearly visible)
  const binaryDrops: BinaryDrop[] = []
  const maxDrops = 28

  for (let i = 0; i < maxDrops; i++) {
    const isPurple = Math.random() > 0.4
    binaryDrops.push({
      x: Math.random() * width,
      y: Math.random() * height,
      text: BINARY_SAMPLES[Math.floor(Math.random() * BINARY_SAMPLES.length)],
      opacity: 0.1 + Math.random() * 0.4,
      maxOpacity: 0.45 + Math.random() * 0.4,
      speedY: -0.3 - Math.random() * 0.45,
      fadeSpeed: 0.006 + Math.random() * 0.008,
      color: isPurple ? '168, 85, 247' : '239, 68, 68',
      glowColor: isPurple ? '#a855f7' : '#ef4444',
      size: 11 + Math.floor(Math.random() * 4)
    })
  }

  // Circuit trace lines with glowing pulse heads
  const circuitLines: CircuitLine[] = []
  const maxCircuits = 12

  const createCircuit = (): CircuitLine => {
    const startX = Math.random() * width
    const startY = Math.random() * height
    const angle = (Math.floor(Math.random() * 4) * 90 * Math.PI) / 180
    const len1 = 60 + Math.random() * 110
    const len2 = 50 + Math.random() * 90

    const midX = startX + Math.cos(angle) * len1
    const midY = startY + Math.sin(angle) * len1

    const turnAngle = angle + (Math.random() > 0.5 ? Math.PI / 4 : -Math.PI / 4)
    const endX = midX + Math.cos(turnAngle) * len2
    const endY = midY + Math.sin(turnAngle) * len2

    const isPurple = Math.random() > 0.35

    return {
      startX,
      startY,
      midX,
      midY,
      endX,
      endY,
      progress: 0,
      speed: 0.01 + Math.random() * 0.015,
      color: isPurple ? '168, 85, 247' : '239, 68, 68',
      glowColor: isPurple ? '#a855f7' : '#ef4444',
      nodeRadius: 3 + Math.random() * 2.5,
      life: 0,
      maxLife: 140 + Math.random() * 100
    }
  }

  for (let i = 0; i < maxCircuits; i++) {
    const circuit = createCircuit()
    circuit.progress = Math.random()
    circuitLines.push(circuit)
  }

  // Render loop
  const render = () => {
    ctx.clearRect(0, 0, width, height)

    // 1. Draw and update Circuit Lines
    circuitLines.forEach((c, idx) => {
      c.life++
      if (c.progress < 1) {
        c.progress += c.speed
      }

      const alpha = Math.sin((c.life / c.maxLife) * Math.PI) * 0.65

      if (alpha > 0.02) {
        ctx.save()
        ctx.shadowBlur = 10
        ctx.shadowColor = c.glowColor

        ctx.beginPath()
        ctx.moveTo(c.startX, c.startY)

        let currentHeadX = c.startX
        let currentHeadY = c.startY

        if (c.progress <= 0.5) {
          const currentProgress = c.progress / 0.5
          currentHeadX = c.startX + (c.midX - c.startX) * currentProgress
          currentHeadY = c.startY + (c.midY - c.startY) * currentProgress
          ctx.lineTo(currentHeadX, currentHeadY)
        } else {
          ctx.lineTo(c.midX, c.midY)
          const secondProgress = (c.progress - 0.5) / 0.5
          currentHeadX = c.midX + (c.endX - c.midX) * secondProgress
          currentHeadY = c.midY + (c.endY - c.midY) * secondProgress
          ctx.lineTo(currentHeadX, currentHeadY)
        }

        ctx.strokeStyle = `rgba(${c.color}, ${alpha})`
        ctx.lineWidth = 1.8
        ctx.stroke()

        // Start node dot with glowing halo
        ctx.beginPath()
        ctx.arc(c.startX, c.startY, c.nodeRadius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${c.color}, ${alpha * 1.3})`
        ctx.fill()

        // Glowing pulse head following the line
        if (c.progress < 1) {
          ctx.beginPath()
          ctx.arc(currentHeadX, currentHeadY, c.nodeRadius * 1.2, 0, Math.PI * 2)
          ctx.fillStyle = '#ffffff'
          ctx.shadowColor = '#ffffff'
          ctx.shadowBlur = 15
          ctx.fill()
        } else {
          // Terminal end node
          ctx.beginPath()
          ctx.arc(c.endX, c.endY, c.nodeRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 1.4})`
          ctx.fill()
        }

        ctx.restore()
      }

      // Reset circuit
      if (c.life >= c.maxLife) {
        circuitLines[idx] = createCircuit()
      }
    })

    // 2. Draw and update Floating Binary Code
    binaryDrops.forEach((b) => {
      b.y += b.speedY
      b.opacity += b.fadeSpeed

      if (b.opacity >= b.maxOpacity) {
        b.fadeSpeed = -Math.abs(b.fadeSpeed)
      } else if (b.opacity <= 0.08) {
        b.fadeSpeed = Math.abs(b.fadeSpeed)
      }

      if (b.y < -30) {
        b.y = height + 30
        b.x = Math.random() * width
        b.text = BINARY_SAMPLES[Math.floor(Math.random() * BINARY_SAMPLES.length)]
        b.opacity = 0.1
      }

      ctx.save()
      ctx.font = `bold ${b.size}px "JetBrains Mono", Consolas, monospace`
      ctx.shadowBlur = 8
      ctx.shadowColor = b.glowColor
      ctx.fillStyle = `rgba(${b.color}, ${Math.max(0, b.opacity)})`
      ctx.fillText(b.text, b.x, b.y)
      ctx.restore()
    })

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
  })
})
</script>

<template>
  <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <!-- Vibrant Canvas for circuit traces & binary particles -->
    <canvas ref="canvasRef" class="w-full h-full block" />

    <!-- Subtle circuit PCB grid mesh overlay -->
    <div
      class="absolute inset-0 opacity-[0.04] pointer-events-none"
      style="background-image: linear-gradient(to right, #8b5cf6 1px, transparent 1px), linear-gradient(to bottom, #8b5cf6 1px, transparent 1px); background-size: 70px 70px;"
    />
  </div>
</template>
