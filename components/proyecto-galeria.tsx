'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export interface MediaItem {
  tipo: 'imagen' | 'video'
  src: string
  alt: string
}

export function ProyectoGaleria({ imagenes }: { imagenes: MediaItem[] }) {
  const [activa, setActiva] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  
  // Referencias para conectar el video de fondo con el principal
  const mainVideoRef = useRef<HTMLVideoElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)

  if (!imagenes || imagenes.length === 0) return null

  const itemActual = imagenes[activa] || imagenes[0]

  // Función para sincronizar la reproducción al darle play/pause al video principal
  const handlePlayState = (playing: boolean) => {
    setIsPlaying(playing)
    if (bgVideoRef.current) {
      if (playing) {
        bgVideoRef.current.play().catch(() => {})
      } else {
        bgVideoRef.current.pause()
      }
    }
  }

  return (
    <div className="space-y-4">
      {/* Visor Principal (Imagen o Video en Grande) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-muted/80 flex items-center justify-center">
        {itemActual.tipo === 'imagen' ? (
          <div className="relative h-full w-full flex items-center justify-center bg-black overflow-hidden">
            {/* Fondo difuminado real usando Next/Image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <Image
                src={itemActual.src || '/placeholder.svg'}
                alt=""
                fill
                sizes="100vw"
                className="h-full w-full object-cover blur-2xl opacity-40 scale-110"
              />
            </div>
            
            {/* Imagen principal nítida */}
            <Image
              key={itemActual.src}
              src={itemActual.src || '/placeholder.svg'}
              alt={itemActual.alt || 'Imagen principal'}
              fill
              priority
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="relative z-10 object-contain p-2 transition-all duration-300"
            />
          </div>
        ) : (
          <div className="relative h-full w-full flex items-center justify-center bg-black overflow-hidden">
            {/* Fondo difuminado que ahora se sincroniza con el estado de reproducción */}
            <video
              ref={bgVideoRef}
              key={`bg-${itemActual.src}`}
              src={itemActual.src}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-40 scale-110 pointer-events-none"
            />
            
            {/* Video principal con sus controles y eventos de reproducción */}
            <video
              ref={mainVideoRef}
              key={`main-${itemActual.src}`}
              src={itemActual.src}
              controls
              playsInline
              preload="metadata"
              onPlay={() => handlePlayState(true)}
              onPause={() => handlePlayState(false)}
              onEnded={() => handlePlayState(false)}
              className="relative z-10 h-full w-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Miniaturas de la Galería (tanto para fotos como videos) */}
      {imagenes.length > 1 && (
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {imagenes.filter(Boolean).map((item, i) => (
            <button
              key={`${item.src || 'media'}-${i}`}
              type="button"
              onClick={() => {
                setActiva(i)
                setIsPlaying(false)
              }}
              className={cn(
                'relative aspect-square w-full overflow-hidden rounded-lg border-2 transition-all cursor-pointer bg-black',
                i === activa
                  ? 'border-primary ring-2 ring-primary/25 scale-95'
                  : 'border-transparent opacity-70 hover:opacity-100',
              )}
            >
              {item?.tipo === 'imagen' ? (
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
                    src={item?.src}
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