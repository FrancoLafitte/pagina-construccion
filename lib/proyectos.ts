// -----------------------------------------------------------------------------
// DATOS DE PROYECTOS - Bahia Urbana
// -----------------------------------------------------------------------------
// Para agregar, editar o quitar un proyecto, modificá el array `proyectos` de
// abajo. Cada proyecto necesita como mínimo: slug (identificador único en la
// URL), nombre, ubicacion, estado, tipo, y una imagen de portada.
//
// Imágenes: subí los archivos a la carpeta /public/proyectos y referenciá la
// ruta empezando con "/proyectos/tu-imagen.png".
//
// Videos: si tenés un video (.mp4), subilo a /public/proyectos y poné su ruta
// en el campo `video`. Si lo dejás vacío, se muestra un espacio reservado.
// -----------------------------------------------------------------------------

export type EstadoProyecto = 'En desarrollo' | 'Finalizado' | 'Próximo'

export type TipoProyecto =
  | 'Residencial'
  | 'Corporativo'
  | 'Uso mixto'
  | 'Urbanismo'

export interface Proyecto {
  slug: string
  nombre: string
  ubicacion: string
  estado: EstadoProyecto
  tipo: TipoProyecto
  anio: number
  superficie: string
  unidades?: string
  /** Porcentaje de avance (0-100). Relevante para obras "En desarrollo". */
  avance?: number
  /** Texto corto para las tarjetas. */
  resumen: string
  /** Párrafos de la descripción completa (uno por elemento del array). */
  descripcion: string[]
  imagenPortada: string
  galeria: { src: string; alt: string }[]
  /** Ruta a un archivo de video .mp4, o null si todavía no hay. */
  video: string | null
  destacado?: boolean
}

export const proyectos: Proyecto[] = [
  {
    slug: 'torre-horizonte',
    nombre: 'Torre Horizonte',
    ubicacion: 'Puerto Madero, Buenos Aires',
    estado: 'En desarrollo',
    tipo: 'Residencial',
    anio: 2025,
    superficie: '32.400 m²',
    unidades: '148 unidades',
    avance: 62,
    resumen:
      'Torre residencial de 34 pisos con vistas al río, amenities de última generación y un lobby de doble altura.',
    descripcion: [
      'Torre Horizonte es nuestro proyecto insignia: una torre residencial de 34 pisos pensada para redefinir el skyline de la ciudad. Su fachada de vidrio de alto rendimiento maximiza las vistas al río mientras optimiza la eficiencia energética del edificio.',
      'El proyecto integra más de 1.800 m² de amenities, incluyendo piscina climatizada, gimnasio panorámico, coworking y terrazas verdes en distintos niveles. Cada detalle fue diseñado para acompañar la forma de vivir de las próximas generaciones.',
      'Actualmente en obra, la torre avanza según cronograma con entrega prevista para fines de 2026.',
    ],
    imagenPortada: '/proyectos/hero-torre.png',
    galeria: [
      { src: '/proyectos/hero-torre.png', alt: 'Fachada de Torre Horizonte al atardecer' },
      { src: '/proyectos/mirador-lobby.png', alt: 'Lobby de doble altura de Torre Horizonte' },
      { src: '/proyectos/altos-obra.png', alt: 'Avance de obra de Torre Horizonte' },
    ],
    video: null,
    destacado: true,
  },
  {
    slug: 'mirador-del-parque',
    nombre: 'Mirador del Parque',
    ubicacion: 'Palermo, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2023,
    superficie: '18.900 m²',
    unidades: '96 unidades',
    avance: 100,
    resumen:
      'Edificio residencial frente al parque, con balcones aterrazados y terminaciones premium.',
    descripcion: [
      'Mirador del Parque es un edificio residencial de escala media ubicado frente a uno de los pulmones verdes más importantes de la ciudad. Su diseño prioriza la relación entre el interior y el paisaje mediante grandes balcones aterrazados.',
      'El edificio combina una paleta de materiales nobles —piedra clara, madera y vidrio— con espacios comunes cálidos y luminosos. Fue entregado en 2023 y hoy es un referente del barrio.',
    ],
    imagenPortada: '/proyectos/mirador-exterior.png',
    galeria: [
      { src: '/proyectos/mirador-exterior.png', alt: 'Fachada de Mirador del Parque' },
      { src: '/proyectos/mirador-lobby.png', alt: 'Lobby de Mirador del Parque' },
    ],
    video: null,
    destacado: true,
  },
  {
    slug: 'costanera-bay',
    nombre: 'Costanera Bay',
    ubicacion: 'Vicente López, Buenos Aires',
    estado: 'En desarrollo',
    tipo: 'Uso mixto',
    anio: 2024,
    superficie: '41.200 m²',
    unidades: '210 unidades + retail',
    avance: 38,
    resumen:
      'Complejo de uso mixto frente a la bahía, con viviendas, comercios y una nueva costanera pública.',
    descripcion: [
      'Costanera Bay es un desarrollo de uso mixto que reconvierte un frente costero en un nuevo barrio integrado a la ciudad. El proyecto combina viviendas, locales comerciales y espacio público de calidad.',
      'La propuesta incluye una costanera peatonal de acceso libre, pensada como un aporte urbano que trasciende los límites del emprendimiento. Es un ejemplo de cómo entendemos la expansión: crecer sumando ciudad.',
    ],
    imagenPortada: '/proyectos/costanera-exterior.png',
    galeria: [
      { src: '/proyectos/costanera-exterior.png', alt: 'Vista general de Costanera Bay' },
      { src: '/proyectos/costanera-terraza.png', alt: 'Terraza con vista a la bahía en Costanera Bay' },
    ],
    video: null,
    destacado: true,
  },
  {
    slug: 'distrito-central',
    nombre: 'Distrito Central',
    ubicacion: 'Córdoba Capital',
    estado: 'Finalizado',
    tipo: 'Uso mixto',
    anio: 2022,
    superficie: '27.500 m²',
    unidades: '120 unidades + plaza',
    avance: 100,
    resumen:
      'Renovación urbana con planta baja comercial, oficinas y una plaza pública en el corazón de la ciudad.',
    descripcion: [
      'Distrito Central es un proyecto de renovación urbana que dio nueva vida a una manzana subutilizada del centro. Integra locales comerciales, oficinas y viviendas alrededor de una plaza pública activa durante todo el día.',
      'La intervención revitalizó el entorno inmediato y se convirtió en un punto de encuentro para el barrio.',
    ],
    imagenPortada: '/proyectos/distrito-exterior.png',
    galeria: [
      { src: '/proyectos/distrito-exterior.png', alt: 'Plaza y edificio de Distrito Central' },
    ],
    video: null,
  },
  {
    slug: 'altos-de-la-bahia',
    nombre: 'Altos de la Bahía',
    ubicacion: 'Bahía Blanca',
    estado: 'En desarrollo',
    tipo: 'Residencial',
    anio: 2025,
    superficie: '15.600 m²',
    unidades: '84 unidades',
    avance: 20,
    resumen:
      'Nueva torre residencial en etapa de estructura, con foco en eficiencia energética.',
    descripcion: [
      'Altos de la Bahía es una torre residencial que actualmente se encuentra en etapa de estructura. El proyecto incorpora criterios de eficiencia energética desde el diseño: aislación de alto desempeño, ventilación cruzada y energía solar para espacios comunes.',
      'Representa nuestra apuesta por llevar construcción moderna a ciudades en crecimiento.',
    ],
    imagenPortada: '/proyectos/altos-obra.png',
    galeria: [
      { src: '/proyectos/altos-obra.png', alt: 'Obra en construcción de Altos de la Bahía' },
    ],
    video: null,
  },
  {
    slug: 'nodo-corporativo',
    nombre: 'Nodo Corporativo',
    ubicacion: 'Rosario, Santa Fe',
    estado: 'Próximo',
    tipo: 'Corporativo',
    anio: 2026,
    superficie: '22.800 m²',
    unidades: 'Oficinas AAA',
    avance: 0,
    resumen:
      'Edificio corporativo clase AAA con plantas flexibles y certificación de sustentabilidad.',
    descripcion: [
      'Nodo Corporativo es un edificio de oficinas clase AAA en etapa de proyecto. Ofrece plantas libres y flexibles, capaces de adaptarse a distintas formas de trabajo, con foco en el bienestar de las personas.',
      'Apunta a obtener certificación de construcción sustentable, en línea con nuestro compromiso de modernizar el modo en que se construye.',
    ],
    imagenPortada: '/proyectos/nodo-exterior.png',
    galeria: [
      { src: '/proyectos/nodo-exterior.png', alt: 'Render exterior de Nodo Corporativo' },
      { src: '/proyectos/nodo-interior.png', alt: 'Interior de oficinas de Nodo Corporativo' },
    ],
    video: null,
  },
  {
    slug: 'terrazas-del-sur',
    nombre: 'Terrazas del Sur',
    ubicacion: 'La Plata, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2021,
    superficie: '12.300 m²',
    unidades: '64 unidades',
    avance: 100,
    resumen:
      'Edificio de baja altura con terrazas verdes escalonadas y amenities integrados.',
    descripcion: [
      'Terrazas del Sur es un edificio residencial de baja altura que hace de las terrazas verdes su gran protagonista. Cada nivel se retira para generar espacios exteriores propios cubiertos de vegetación.',
      'El proyecto integra amenities de calidad —pileta, gimnasio y salón de usos múltiples— en una escala amable y cercana.',
    ],
    imagenPortada: '/proyectos/terrazas-exterior.png',
    galeria: [
      { src: '/proyectos/terrazas-exterior.png', alt: 'Fachada con terrazas verdes de Terrazas del Sur' },
      { src: '/proyectos/terrazas-amenities.png', alt: 'Amenities de Terrazas del Sur' },
    ],
    video: null,
  },
]

export function getProyecto(slug: string): Proyecto | undefined {
  return proyectos.find((p) => p.slug === slug)
}

export function getProyectosDestacados(): Proyecto[] {
  return proyectos.filter((p) => p.destacado)
}

export const tiposProyecto: TipoProyecto[] = [
  'Residencial',
  'Corporativo',
  'Uso mixto',
  'Urbanismo',
]

export const estadosProyecto: EstadoProyecto[] = [
  'En desarrollo',
  'Finalizado',
  'Próximo',
]
