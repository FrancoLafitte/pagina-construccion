'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/#enfoque', label: 'Enfoque' },
  { href: '/#contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false // Los anclajes de la home no se marcan como ruta activa permanente
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo con la imagen real */}
        <Link href="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-40 sm:w-44 flex items-center translate-y-1">
            <Image
              src="/LOGO BU png.png" // Reemplaza esto por el nombre exacto del archivo que guardaste en public/
              alt="Bahía Urbana S.A."
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        {/* Navegación de Escritorio */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                isActive(link.href) && 'text-foreground font-semibold',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón de Acción (Escritorio) */}
        <div className="hidden md:block">
          <Link href="/proyectos" className={cn(buttonVariants({ size: 'sm' }))}>
            Ver proyectos
          </Link>
        </div>

        {/* Botón Menú Móvil */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menú Desplegable para Móviles */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden animate-in fade-in slide-in-from-top-2">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground",
                  isActive(link.href) && "text-foreground font-semibold bg-accent/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/proyectos"
              onClick={() => setOpen(false)}
              className={cn(buttonVariants({ size: 'lg' }), 'mt-2 w-full justify-center')}
            >
              Ver proyectos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}