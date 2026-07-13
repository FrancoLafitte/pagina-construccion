import type { Metadata } from 'next'
import { ProyectosExplorer } from '@/components/proyectos-explorer'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Explorá el portfolio de obras de Bahia Urbana: proyectos residenciales, corporativos y de uso mixto, en desarrollo y finalizados.',
}

export default function ProyectosPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <header className="max-w-2xl">
        <span className="text-sm font-medium uppercase tracking-wide text-brand">
          Portfolio
        </span>
        <h1 className="mt-3 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Nuestros proyectos
        </h1>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Cada obra refleja nuestra forma de construir: con foco en la calidad,
          la modernización y el aporte a la ciudad. Buscá una obra puntual o
          filtrá por estado y tipo.
        </p>
      </header>

      <div className="mt-12">
        <ProyectosExplorer />
      </div>
    </div>
  )
}
