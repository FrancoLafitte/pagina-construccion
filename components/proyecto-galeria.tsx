'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImagenGaleria {
  src: string
  alt: string
}

export function ProyectoGaleria({ imagenes }: { imagenes: ImagenGaleria[] }) {
  const [activa, setActiva] = useState(0)

  if (imagenes.length === 0) return null

  return (
    <div>
      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-muted">
        <Image
          key={imagenes[activa].src}
          src={imagenes[activa].src || '/placeholder.svg'}
          alt={imagenes[activa].alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-cover"
        />
      </div>

      {imagenes.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-5">
          {imagenes.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver imagen ${i + 1}`}
              className={cn(
                'relative aspect-square overflow-hidden rounded-lg border-2 transition-all',
                i === activa
                  ? 'border-brand'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
