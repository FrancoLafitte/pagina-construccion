import Image from 'next/image'
import { Building2, Leaf, Compass } from 'lucide-react'

const pilares = [
  {
    icon: Compass,
    titulo: 'Expansión',
    texto:
      'Llevamos construcción moderna a nuevas ciudades y mercados, creciendo con proyectos que suman ciudad y generan valor a largo plazo.',
  },
  {
    icon: Building2,
    titulo: 'Modernización',
    texto:
      'Incorporamos tecnología, industrialización y metodología BIM para construir mejor, más rápido y con estándares de calidad superiores.',
  },
  {
    icon: Leaf,
    titulo: 'Sustentabilidad',
    texto:
      'Diseñamos edificios eficientes, pensados para reducir su impacto y mejorar la vida de quienes los habitan durante décadas.',
  },
]

export function Enfoque() {
  return (
    <section id="enfoque" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <span className="text-sm font-medium uppercase tracking-wide text-brand">
            Nuestra visión
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Una empresa que crece y moderniza cada obra
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            En Bahia Urbana entendemos la construcción como un proceso en
            permanente evolución. Apuntamos a expandirnos hacia nuevos mercados
            y a modernizar cada etapa del proyecto, desde el diseño hasta la
            entrega final.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Acompañamos cada obra con dirección técnica dedicada, procesos
            documentados y un equipo que combina experiencia con una mirada
            puesta en el futuro.
          </p>

          <div className="mt-10 flex flex-col gap-8">
            {pilares.map((pilar) => (
              <div key={pilar.titulo} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/12 text-brand">
                  <pilar.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{pilar.titulo}</h3>
                  <p className="mt-1 text-pretty leading-relaxed text-muted-foreground">
                    {pilar.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border lg:aspect-[4/5]">
          <Image
            src="/proyectos/equipo-obra.png"
            alt="Equipo de arquitectos e ingenieros de Bahia Urbana revisando planos en obra"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
