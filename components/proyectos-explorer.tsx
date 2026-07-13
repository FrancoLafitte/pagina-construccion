'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ProyectoCard } from '@/components/proyecto-card'
import {
  proyectos,
  estadosProyecto,
  type EstadoProyecto,
  type Proyecto,
  type TipoProyecto,
} from '@/lib/proyectos'

// Tipos presentes en los datos, en orden.
const tiposDisponibles: TipoProyecto[] = Array.from(
  new Set(proyectos.map((p) => p.tipo)),
) as TipoProyecto[]

export function ProyectosExplorer() {
  const [busqueda, setBusqueda] = useState('')
  const [estado, setEstado] = useState<EstadoProyecto | 'Todos'>('Todos')
  const [tipo, setTipo] = useState<TipoProyecto | 'Todos'>('Todos')

  const resultados = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    return proyectos.filter((p: Proyecto) => {
      const coincideBusqueda =
        q === '' ||
        p.nombre.toLowerCase().includes(q) ||
        p.ubicacion.toLowerCase().includes(q) ||
        p.tipo.toLowerCase().includes(q)
      const coincideEstado = estado === 'Todos' || p.estado === estado
      const coincideTipo = tipo === 'Todos' || p.tipo === tipo
      return coincideBusqueda && coincideEstado && coincideTipo
    })
  }, [busqueda, estado, tipo])

  const hayFiltros = busqueda !== '' || estado !== 'Todos' || tipo !== 'Todos'

  const limpiar = () => {
    setBusqueda('')
    setEstado('Todos')
    setTipo('Todos')
  }

  return (
    <div>
      {/* Buscador */}
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, ubicación o tipo de obra..."
          className="h-14 w-full rounded-xl border border-border bg-card pl-12 pr-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {/* Filtros */}
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 hidden items-center gap-1.5 text-sm font-medium text-muted-foreground sm:inline-flex">
            <SlidersHorizontal className="h-4 w-4" />
            Estado
          </span>
          <FiltroChip label="Todos" activo={estado === 'Todos'} onClick={() => setEstado('Todos')} />
          {estadosProyecto.map((e) => (
            <FiltroChip key={e} label={e} activo={estado === e} onClick={() => setEstado(e)} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 hidden text-sm font-medium text-muted-foreground sm:inline">
            Tipo
          </span>
          <FiltroChip label="Todos" activo={tipo === 'Todos'} onClick={() => setTipo('Todos')} />
          {tiposDisponibles.map((t) => (
            <FiltroChip key={t} label={t} activo={tipo === t} onClick={() => setTipo(t)} />
          ))}
        </div>
      </div>

      {/* Contador de resultados */}
      <div className="mt-8 flex items-center justify-between border-b border-border pb-4">
        <p className="text-sm text-muted-foreground">
          {resultados.length}{' '}
          {resultados.length === 1 ? 'proyecto' : 'proyectos'}
        </p>
        {hayFiltros && (
          <button
            type="button"
            onClick={limpiar}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grilla de resultados */}
      {resultados.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resultados.map((proyecto) => (
            <ProyectoCard key={proyecto.slug} proyecto={proyecto} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-20 text-center">
          <p className="font-display text-lg font-semibold">No encontramos proyectos</p>
          <p className="mt-1 max-w-sm text-pretty text-sm text-muted-foreground">
            Probá con otra búsqueda o ajustá los filtros para ver más obras.
          </p>
          <button
            type="button"
            onClick={limpiar}
            className="mt-4 text-sm font-medium text-brand hover:underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </div>
  )
}

function FiltroChip({
  label,
  activo,
  onClick,
}: {
  label: string
  activo: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
        activo
          ? 'border-foreground bg-foreground text-background'
          : 'border-border bg-card text-muted-foreground hover:border-foreground/30 hover:text-foreground',
      )}
    >
      {label}
    </button>
  )
}
