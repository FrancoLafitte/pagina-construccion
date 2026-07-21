'use client'

'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface VideoItem {
  id: string
  titulo: string
  subtitulo: string
  videoSrc: string
  proyectoSlug: string
  orientacion?: 'horizontal' | 'vertical'
}

const videosProyectos: VideoItem[] = [
  {
    id: '1',
    titulo: 'Guemes 336',
    subtitulo: 'Living y vistas de depto finalizado',
    videoSrc: '/proyectos/G 336/livingVistas.mp4',
    proyectoSlug: 'costanera',
    orientacion: 'vertical',
  },
  {
    id: '2',
    titulo: 'Edificio Terraza',
    subtitulo: 'Recorrido de losas y espacios comunes',
    videoSrc: '/proyectos/videos/terraza.mp4',
    proyectoSlug: 'terraza',
    orientacion: 'vertical',
  },
]

export function VideoDestacado() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const videoActual = videosProyectos[currentIndex]
  
  // Determinamos si es vertical de forma síncrona
  const esVertical = videoActual.orientacion === 'vertical'

  const siguienteVideo = () => {
    setCurrentIndex((prev) => (prev + 1) % videosProyectos.length)
  }

  const anteriorVideo = () => {
    setCurrentIndex((prev) => (prev - 1 + videosProyectos.length) % videosProyectos.length)
  }

  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              En Movimiento
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">
              Obras en ejecución real
            </h2>
          </div>
          <p className="text-muted-foreground mt-2 md:mt-0 max-w-md text-sm md:text-base">
            Seguimiento audiovisual de nuestros desarrollos constructivos con tecnología de vanguardia.
          </p>
        </div>

        {/* Contenedor Principal */}
        <div className="relative aspect-[4/3] md:aspect-[18/8] w-full overflow-hidden rounded-3xl border border-border bg-black shadow-2xl group flex items-center justify-center">
          
          {/* Fondo borroneado dinámico (Solo aparece si el video es vertical para rellenar los costados) */}
          {esVertical && (
            <video
              key={`bg-${videoActual.videoSrc}`}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-40 scale-110 pointer-events-none"
            >
              <source src={videoActual.videoSrc} type="video/mp4" />
            </video>
          )}

          {/* Etiqueta de Video Principal (centrada y adaptada) */}
          <video
            key={videoActual.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full transition-all duration-300 z-10 ${
              esVertical ? 'object-contain py-4' : 'object-cover'
            }`}
          >
            <source src={videoActual.videoSrc} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>

          {/* Degradado oscuro inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-20" />

          {/* Información superpuesta */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4 z-30">
            <div>
              <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                Destacado
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                {videoActual.titulo}
              </h3>
              <p className="text-gray-200 text-sm md:text-base mt-1 max-w-lg drop-shadow">
                {videoActual.subtitulo}
              </p>
            </div>

            {/* Controles del Carrusel */}
            <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10 self-start md:self-auto">
              <button
                onClick={anteriorVideo}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Video anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="text-xs font-medium text-white px-2">
                {currentIndex + 1} / {videosProyectos.length}
              </span>

              <button
                onClick={siguienteVideo}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Siguiente video"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}