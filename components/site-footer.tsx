import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contacto" className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-brand text-brand-foreground">
                <span className="font-display text-base font-bold leading-none">B</span>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Bahia Urbana
              </span>
            </Link>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              Constructora de edificios enfocada en la expansión y la
              modernización. Construimos espacios pensados para las próximas
              generaciones.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Navegación</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="transition-colors hover:text-foreground">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/#enfoque" className="transition-colors hover:text-foreground">
                  Enfoque
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold">Contacto</h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href="mailto:hola@bahiaurbana.com" className="transition-colors hover:text-foreground">
                  hola@bahiaurbana.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <span>+54 11 5555 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-brand" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Bahia Urbana. Todos los derechos reservados.</p>
          <p>Construimos la ciudad que viene.</p>
        </div>
      </div>
    </footer>
  )
}
