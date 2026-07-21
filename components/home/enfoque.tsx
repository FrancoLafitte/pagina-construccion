/*import Image from 'next/image'
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
*/

import Image from 'next/image'
import { CheckCircle2, ShieldCheck, Zap } from 'lucide-react'

const puntosEnfoque = [
  {
    titulo: 'Calidad constructiva superior',
    descripcion: 'Utilizamos materiales certificados y tecnología de vanguardia en cada etapa de la obra.',
    icon: ShieldCheck,
  },
  {
    titulo: 'Cumplimiento de plazos',
    descripcion: 'Planificación rigurosa para entregar cada proyecto en el tiempo estipulado, sin sorpresas.',
    icon: Zap,
  },
  {
    titulo: 'Asesoramiento integral',
    descripcion: 'Acompañamiento personalizado desde el diseño inicial hasta la entrega de llaves.',
    icon: CheckCircle2,
  },
]

export function Enfoque() {
  return (
    <section className="relative w-full py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Textos más limpios y chicos */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-xs md:text-sm">
                Nuestro Método
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mt-1 text-foreground">
                Construimos con visión, ejecutamos con precisión
              </h2>
            </div>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Combinamos la ingeniería moderna con la experiencia de campo para garantizar estructuras sólidas, funcionales y estéticamente impecables.
            </p>

            {/* Lista de puntos clave más compacta */}
            <div className="space-y-4 pt-2">
              {puntosEnfoque.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-3.5">
                    <div className="mt-1 p-2 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm md:text-base text-foreground">
                        {item.titulo}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm mt-0.5">
                        {item.descripcion}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Columna Derecha: Imagen de apoyo al lado */}
          <div className="lg:col-span-6">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border shadow-xl bg-muted">
              <Image
                src="/proyectos\G 958\WhatsApp Image 2026-05-05 at 11.18.35 AM (1).jpeg" // Reemplaza por la ruta de tu foto de obra
                alt="Enfoque de construcción y trabajo en obra"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}