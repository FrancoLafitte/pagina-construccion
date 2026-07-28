'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface MediaItem {
  tipo: 'imagen' | 'video'
  src: string
  alt: string
}

export function ProyectoGaleria({ imagenes }: { imagenes: MediaItem[] }) {
  const [activa, setActiva] = useState(0)
  // Estado para saber si el ítem actual es una imagen vertical
  const [esVertical, setEsVertical] = useState(false)

  if (!imagenes || imagenes.length === 0) return null

  const itemActual = imagenes[activa] || imagenes[0]

  return (
    <div className="space-y-4">
      {/* Visor Principal (Imagen o Video en Grande) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted/80 flex items-center justify-center">
        {itemActual.tipo === 'imagen' ? (
          <>
            {/* Si es vertical, mostramos un fondo difuminado sutil para rellenar los costados */}
            {esVertical && (
              <div 
                className="absolute inset-0 bg-cover bg-center blur-xl opacity-30 scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${itemActual.src || '/placeholder.svg'})` }}
              />
            )}
            
            <Image
              key={itemActual.src}
              src={itemActual.src || '/placeholder.svg'}
              alt={itemActual.alt || 'Imagen principal'}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className={cn(
                "relative z-10 transition-all duration-300",
                esVertical ? "object-contain p-2" : "object-cover"
              )}
              onLoad={(e) => {
                const img = e.currentTarget
                if (img.naturalHeight > img.naturalWidth) {
                  setEsVertical(true)
                } else {
                  setEsVertical(false)
                }
              }}
            />
          </>
        ) : (
          
          <div className="relative h-full w-full flex items-center justify-center bg-black/9onda">
            {/* Fondo difuminado sutil usando el mismo video */}
            <video
              src={itemActual.src}
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover blur-xl opacity-30 scale-110 pointer-events-none"
            />
            
            {/* Video principal con sus proporciones reales */}
            <video
              key={itemActual.src}
              src={itemActual.src}
              controls
              preload="metadata"
              className="relative z-10 h-full w-full object-contain max-h-[500px]"
            />
          </div>
        )}
      </div>

      {/* Miniaturas de la Galería (tanto para fotos como videos) */}
      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {imagenes.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => {
                setActiva(i)
                if (item.tipo === 'video') setEsVertical(false)
              }}
              className={cn(
                'relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all cursor-pointer bg-black',
                i === activa
                  ? 'border-primary ring-2 ring-primary/25 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              {item.tipo === 'imagen' ? (
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.alt || `Miniatura ${i}`}
                  fill
                  sizes="120px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center relative">
                  <video
                    src={item.src}
                    preload="metadata"
                    className="h-full w-full object-cover opacity-60"
                  />
                  {/* Icono indicador de que es video */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}