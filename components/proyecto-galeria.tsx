/*'use client'

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
          className="object-contain relative z-10 p-2"
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
                className="object-contain relative z-10 p-2"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
*/

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
  // Estado para saber si la imagen actual es vertical (más alta que ancha)
  const [esVertical, setEsVertical] = useState(false)

  if (!imagenes || imagenes.length === 0) return null

  const imagenActual = imagenes[activa] || imagenes[0]

  return (
    <div className="space-y-4">
      {/* Imagen Principal en Grande */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted/80 flex items-center justify-center">
        {/* Si es vertical, mostramos un fondo difuminado sutil para rellenar los costados */}
        {esVertical && (
          <div 
            className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 pointer-events-none"
            style={{ backgroundImage: `url(${imagenActual.src || '/placeholder.svg'})` }}
          />
        )}
        
        <Image
          key={imagenActual.src}
          src={imagenActual.src || '/placeholder.svg'}
          alt={imagenActual.alt || 'Imagen principal'}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 66vw"
          // Acá aplicamos contain si es vertical, o cover si es horizontal
          className={cn(
            "relative z-10 transition-all duration-300",
            esVertical ? "object-contain p-2" : "object-cover"
          )}
          onLoad={(e) => {
            const img = e.currentTarget
            // Comparamos el alto natural con el ancho natural de la imagen
            if (img.naturalHeight > img.naturalWidth) {
              setEsVertical(true)
            } else {
              setEsVertical(false)
            }
          }}
        />
      </div>

      {/* Miniaturas de la Galería */}
      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {imagenes.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => setActiva(i)}
              className={cn(
                'relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all cursor-pointer',
                i === activa
                  ? 'border-primary ring-2 ring-primary/25 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt || `Miniatura ${i}`}
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