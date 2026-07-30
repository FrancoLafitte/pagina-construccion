import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Calendar, LayoutGrid, MapPin, Ruler } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { EstadoBadge } from '@/components/estado-badge'
import { ProyectoGaleria } from '@/components/proyecto-galeria'
import { getProyecto, proyectos } from '@/lib/proyectos'

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const proyecto = getProyecto(slug)
  if (!proyecto) return { title: 'Proyecto no encontrado' }
  return {
    title: proyecto.nombre,
    description: proyecto.resumen,
  }
}

export default async function ProyectoDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const proyecto = getProyecto(slug)

  if (!proyecto) notFound()

  const ficha = [
    { icon: MapPin, label: 'Ubicación', valor: proyecto.ubicacion },
    { icon: LayoutGrid, label: 'Tipo', valor: proyecto.tipo },
    { icon: Ruler, label: 'Superficie', valor: proyecto.superficie },
    { icon: Calendar, label: 'Año', valor: String(proyecto.anio) },
  ]

  return (
    <article className="mx-auto max-w-7xl px-4 pt-6 pb-10 sm:px-6 lg:px-8 lg:pt-8 lg:pb-16">
      <Link
        href="/proyectos"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a proyectos
      </Link>

      <header className="mt-8 flex flex-col gap-4 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-brand">
            <span>{proyecto.tipo}</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{proyecto.anio}</span>
          </div>
          <h1 className="mt-2 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {proyecto.nombre}
          </h1>
          <p className="mt-3 flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            {proyecto.ubicacion}
          </p>
        </div>
        <EstadoBadge estado={proyecto.estado} className="self-start px-3 py-1.5 text-sm sm:self-auto" />
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-12">
        {/* Columna principal */}
        <div className="space-y-12">
          {/* Opción A: Si el proyecto tiene galería de renders separada */}
          {proyecto.galeriaRenders && proyecto.galeriaRenders.length > 0 ? (
            <div className="space-y-4">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight">Renders del proyecto</h2>
                <p className="text-sm text-muted-foreground">Así es como se proyecta la obra finalizada.</p>
              </div>
              <ProyectoGaleria imagenes={proyecto.galeriaRenders} />
            </div>
          ) : (
            /* Opción B: Si usa la galería unificada tradicional */
            proyecto.galeria && proyecto.galeria.length > 0 && (
              <ProyectoGaleria imagenes={proyecto.galeria} />
            )
          )}

          {/* Si el proyecto tiene galería de avance de obra separada */}
          {proyecto.galeriaObra && proyecto.galeriaObra.length > 0 && (
            <div className="space-y-4 border-t border-border pt-10">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight">Avance de obra</h2>
                <p className="text-sm text-muted-foreground">Registro fotográfico y audiovisual del estado actual de construcción.</p>
              </div>
              <ProyectoGaleria imagenes={proyecto.galeriaObra} />
            </div>
          )}

          <div className="border-t border-border pt-10">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Sobre el proyecto
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {proyecto.descripcion.map((parrafo, i) => (
                <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Ficha técnica (sidebar) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h2 className="font-display text-lg font-semibold">Ficha técnica</h2>

            <dl className="mt-5 flex flex-col gap-5">
              {ficha.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-brand">
                    <item.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 font-medium">{item.valor}</dd>
                  </div>
                </div>
              ))}
              {proyecto.unidades && (
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-brand">
                    <LayoutGrid className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                      Programa
                    </dt>
                    <dd className="mt-0.5 font-medium">{proyecto.unidades}</dd>
                  </div>
                </div>
              )}
            </dl>

            {typeof proyecto.avance === 'number' && proyecto.estado !== 'Próximo' && (
              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Avance de obra</span>
                  <span className="font-semibold">{proyecto.avance}%</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-brand transition-all"
                    style={{ width: `${proyecto.avance}%` }}
                  />
                </div>
              </div>
            )}

            <Link
              href="/#contacto"
              className={cn(buttonVariants({ size: 'lg' }), 'mt-6 h-11 w-full gap-2')}
            >
              Consultar por esta obra
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </aside>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-2 font-display text-lg font-semibold transition-colors hover:text-brand"
        >
          Ver todos los proyectos
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </article>
  )
}