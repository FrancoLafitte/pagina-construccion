import { Film } from 'lucide-react'

export function ProyectoVideo({
  src,
  poster,
  titulo,
}: {
  src: string | null
  poster: string
  titulo: string
}) {
  if (src) {
    return (
      <div className="overflow-hidden rounded-2xl border border-border bg-black">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          poster={poster}
          className="aspect-video w-full"
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Tu navegador no soporta la reproducción de video.
        </video>
      </div>
    )
  }

  // Espacio reservado cuando todavía no hay video cargado.
  return (
    <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/50 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/12 text-brand">
        <Film className="h-6 w-6" />
      </div>
      <p className="mt-4 font-display font-semibold">Video próximamente</p>
      <p className="mt-1 max-w-xs text-pretty px-4 text-sm text-muted-foreground">
        Cuando esté disponible, aquí se mostrará el recorrido en video de{' '}
        {titulo}.
      </p>
    </div>
  )
}
