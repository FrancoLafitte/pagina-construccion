import { cn } from '@/lib/utils'
import type { EstadoProyecto } from '@/lib/proyectos'

const estilos: Record<EstadoProyecto, string> = {
  'En desarrollo': 'bg-brand/15 text-brand border-brand/25',
  Finalizado: 'bg-foreground/10 text-foreground border-foreground/15',
  Próximo: 'bg-muted text-muted-foreground border-border',
}

export function EstadoBadge({
  estado,
  className,
}: {
  estado: EstadoProyecto
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
        estilos[estado],
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
      {estado}
    </span>
  )
}
