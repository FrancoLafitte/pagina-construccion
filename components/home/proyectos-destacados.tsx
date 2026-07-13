import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ProyectoCard } from '@/components/proyecto-card'
import { getProyectosDestacados } from '@/lib/proyectos'

export function ProyectosDestacados() {
  const destacados = getProyectosDestacados()

  return (
    <section className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="text-sm font-medium uppercase tracking-wide text-brand">
              Proyectos
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Obras que marcan el camino
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Una selección de nuestros desarrollos en curso y finalizados.
              Explorá el portfolio completo para ver cada obra en detalle.
            </p>
          </div>
          <Link
            href="/proyectos"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 shrink-0 gap-2 px-5')}
          >
            Ver todos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destacados.map((proyecto) => (
            <ProyectoCard key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>
      </div>
    </section>
  )
}
