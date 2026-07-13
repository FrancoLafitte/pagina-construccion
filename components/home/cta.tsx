import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-primary px-6 py-16 text-primary-foreground sm:px-12 lg:px-16 lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tenés un proyecto en mente?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/75">
            Contanos tu idea y descubrí cómo podemos acompañarte en cada etapa,
            desde el anteproyecto hasta la entrega de la obra.
          </p>
          <Link
            href="/#contacto"
            className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'mt-8 h-12 gap-2 px-6 text-base')}
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
