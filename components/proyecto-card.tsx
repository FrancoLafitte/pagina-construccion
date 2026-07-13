import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { EstadoBadge } from '@/components/estado-badge'
import type { Proyecto } from '@/lib/proyectos'

export function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  return (
    <Link
      href={`/proyectos/${proyecto.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-brand/40 hover:shadow-lg hover:shadow-foreground/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={proyecto.imagenPortada || '/placeholder.svg'}
          alt={`Fotografía del proyecto ${proyecto.nombre}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3">
          <EstadoBadge estado={proyecto.estado} className="bg-background/90 backdrop-blur" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-brand">
          <span>{proyecto.tipo}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{proyecto.anio}</span>
        </div>

        <h3 className="mt-2 flex items-start justify-between gap-2 font-display text-xl font-semibold tracking-tight">
          {proyecto.nombre}
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 shrink-0" />
          {proyecto.ubicacion}
        </p>

        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {proyecto.resumen}
        </p>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-4 text-sm">
          <span className="font-medium">{proyecto.superficie}</span>
          {proyecto.unidades && (
            <>
              <span className="text-border">|</span>
              <span className="text-muted-foreground">{proyecto.unidades}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}
