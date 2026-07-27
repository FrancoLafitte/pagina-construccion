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
    <section id="enfoque" className="relative w-full py-16 md:py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Textos más limpios y chicos */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-primary font-semibold uppercase tracking-wider text-xs md:text-sm">
                Nuestro Enfoque
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