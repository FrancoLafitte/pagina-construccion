'use client'

import { useEffect, useRef, useState } from 'react'

interface Stat {
  valor: number
  sufijo: string
  label: string
}

const stats: Stat[] = [
  { valor: 15, sufijo: '+', label: 'Años en el mercado' },
  { valor: 42, sufijo: '', label: 'Edificios entregados' },
  { valor: 320, sufijo: 'K m²', label: 'Superficie construida' },
  { valor: 6, sufijo: '', label: 'Ciudades' },
]

function Contador({ valor, sufijo }: { valor: number; sufijo: string }) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const iniciado = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !iniciado.current) {
            iniciado.current = true
            const duracion = 1400
            const inicio = performance.now()
            const tick = (ahora: number) => {
              const progreso = Math.min((ahora - inicio) / duracion, 1)
              const eased = 1 - Math.pow(1 - progreso, 3)
              setDisplay(Math.round(eased * valor))
              if (progreso < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [valor])

  return (
    <span ref={ref}>
      {display}
      {sufijo}
    </span>
  )
}

export function Stats() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                <Contador valor={stat.valor} sufijo={stat.sufijo} />
              </span>
              <span className="mt-2 text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
