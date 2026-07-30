// -----------------------------------------------------------------------------
// DATOS DE PROYECTOS - Bahia Urbana
// -----------------------------------------------------------------------------
// Para agregar, editar o quitar un proyecto, modificá el array `proyectos` de
// abajo. Cada proyecto necesita como mínimo: slug (identificador único en la
// URL), nombre, ubicacion, estado, tipo, y una imagen de portada.
//
// Imágenes: subí los archivos a la carpeta /public/proyectos y referenciá la
// ruta empezando con "/proyectos/tu-imagen.png".
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
  galeria?: { tipo: 'imagen' | 'video'; src: string; alt: string }[]
  galeriaObra?: { tipo: 'imagen' | 'video'; src: string; alt: string }[]
  galeriaRenders?: { tipo: 'imagen' | 'video'; src: string; alt: string }[]
  destacado?: boolean
}

export const proyectos: Proyecto[] = [
  {
    slug: 'torre-florida',
    nombre: 'Florida 828',
    ubicacion: 'Bahia Blanca, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2025,
    superficie: '32.400 m²',
    unidades: '148 unidades',
    avance: 100,
    resumen:
      'Torre residencial de 34 pisos con vistas al río, amenities de última generación y un lobby de doble altura.',
    descripcion: [
      'Torre Florida 828 es nuestro proyecto insignia: una torre residencial de 34 pisos pensada para redefinir el skyline de la ciudad. Su fachada de vidrio de alto rendimiento maximiza las vistas al río mientras optimiza la eficiencia energética del edificio.',
      'El proyecto integra más de 1.800 m² de amenities, incluyendo piscina climatizada, gimnasio panorámico, coworking y terrazas verdes en distintos niveles. Cada detalle fue diseñado para acompañar la forma de vivir de las próximas generaciones.',
      'Finalizado, y ya en su etapa de ocupación, Torre Florida 828 se ha convertido en un ícono de la ciudad y un referente de la arquitectura residencial moderna.',
    ],
    imagenPortada: '/proyectos/florida-828/fachada-2.jpg',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/florida-828/fachada-2.jpg', alt: 'Fachada de Torre Florida 828 al atardecer' },
      { tipo: 'imagen', src: '/proyectos/florida-828/living-1.jpg', alt: 'Lobby de doble altura de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/living-2.jpg', alt: 'Lobby de doble altura de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/cocina-1.jpg', alt: 'Lobby de doble altura de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/cocina-2.jpg', alt: 'Avance de obra de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/dormitorio.jpg', alt: 'Avance de obra de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/bano-1.jpg', alt: 'Avance de obra de Torre Florida 828' },
      { tipo: 'imagen', src: '/proyectos/florida-828/bano-2.jpg', alt: 'Avance de obra de Torre Florida 828' },
    ],
    destacado: true,
  },

  {
    slug: 'torre-guemes-336',
    nombre: 'Guemes 336',
    ubicacion: 'Bahia Blanca, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2023,
    superficie: '18.900 m²',
    unidades: '96 unidades',
    avance: 100,
    resumen:
      'Edificio residencial frente al parque, con balcones aterrazados y terminaciones premium.',
    descripcion: [
      'Guemes 336 es un edificio residencial de escala media ubicado frente a uno de los pulmones verdes más importantes de la ciudad. Su diseño prioriza la relación entre el interior y el paisaje mediante grandes balcones aterrazados.',
      'El edificio combina una paleta de materiales nobles —piedra clara y vidrio— con espacios comunes cálidos y luminosos. Fue entregado en 2023 y hoy es un referente del barrio.',
    ],
    imagenPortada: '/proyectos/G 336/living-2.png',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/G 336/living-1.png', alt: 'Living de Guemes 336' },
      { tipo: 'imagen', src: '/proyectos/G 336/cocina-1.png', alt: 'Cocina de Guemes 336' },
      { tipo: 'imagen', src: '/proyectos/G 336/dormitorio-1.png', alt: 'Dormitorio de Guemes 336' },
      { tipo: 'imagen', src: '/proyectos/G 336/dormitorio-2.png', alt: 'Dormitorio de Guemes 336' },
      { tipo: 'video', src: '/proyectos/G 336/livingVistas.mp4', alt: 'Video de las vistas de Guemes 336' },
      { tipo: 'video', src: '/proyectos/G 336/cocina.mp4', alt: 'Video de las vistas de Guemes 336' },
      { tipo: 'video', src: '/proyectos/G 336/dormitorio-1.mp4', alt: 'Video de las vistas de Guemes 336' },
      { tipo: 'video', src: '/proyectos/G 336/dormitorio-2.mp4', alt: 'Video de las vistas de Guemes 336' },
      { tipo: 'video', src: '/proyectos/G 336/livingVistas-2.mp4', alt: 'Video de las vistas de Guemes 336' },
    ],
    destacado: true,
  },

  {
    slug: 'guemes-958',
    nombre: 'Guemes 958',
    ubicacion: 'Bahia Blanca, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2024,
    superficie: '41.200 m²',
    unidades: '210 unidades + retail',
    avance: 38,
    resumen:
      'Complejo de uso residencial frente a la bahía, con viviendas, comercios y una nueva costanera pública.',
    descripcion: [
      'Guemes 958 es un desarrollo de uso residencial que reconvierte un frente costero en un nuevo barrio integrado a la ciudad. El proyecto combina viviendas, locales comerciales y espacio público de calidad.',
      'La propuesta incluye una costanera peatonal de acceso libre, pensada como un aporte urbano que trasciende los límites del emprendimiento. Es un ejemplo de cómo entendemos la expansión: crecer sumando ciudad.',
    ],
    imagenPortada: '/proyectos/G 958/fachadaLejos.jpeg',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/G 958/fachadaLejos.jpeg', alt: 'Vista general de Guemes 958' },
      { tipo: 'imagen', src: '/proyectos/G 958/fachadaCerca.jpeg', alt: 'Vista general de Guemes 958' },
      { tipo: 'imagen', src: '/proyectos/G 958/terraza-1.jpeg', alt: 'Vista general de Guemes 958' },
      { tipo: 'imagen', src: '/proyectos/G 958/terraza-2.jpeg', alt: 'Vista general de Guemes 958' },
      { tipo: 'imagen', src: '/proyectos/G 958/terraza-3.jpeg', alt: 'Vista general de Guemes 958' },
      { tipo: 'video', src: '/proyectos/G 958/[Depto03].mp4', alt: 'Vista general de Guemes 958' },
      { tipo: 'video', src: '/proyectos/G 958/[Depto05]_v02.mp4', alt: 'Terraza con vista a la bahía en Guemes 958' },
    ],
    destacado: true,
  },

  {
    slug: 'Thompson-333',
    nombre: 'Thompson 333',
    ubicacion: 'bahia Blanca, Buenos Aires',
    estado: 'Finalizado',
    tipo: 'Residencial',
    anio: 2026,
    superficie: '27.500 m²',
    unidades: '6 unidades',
    avance: 100,
    resumen:
      'Renovación urbana con planta baja comercial, oficinas y una plaza pública en el corazón de la ciudad.',
    descripcion: [
      'Thompson 333 es un proyecto de renovación urbana que dio nueva vida a una manzana subutilizada del centro. Integra locales comerciales, oficinas y viviendas alrededor de una plaza pública activa durante todo el día.',
      'La intervención revitalizó el entorno inmediato y se convirtió en un punto de encuentro para el barrio.',
    ],
    imagenPortada: '/proyectos/T 333/fachada-1.jpg',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/T 333/fachada-1.jpg', alt: 'Fachada del edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/fachada-2.jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/banos-2.jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/banos.jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/barra-cocina.jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/cocina(8).jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/comedor.jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/dormitorio(22).jpg', alt: 'Plaza y edificio de Thompson 333' },
      { tipo: 'imagen', src: '/proyectos/T 333/living(5).jpg', alt: 'Plaza y edificio de Thompson 333' },
    ],
    destacado: false,
  },

  {
    slug: 'torre-ohiggins-237',
    nombre: 'Ohiggins 237',
    ubicacion: 'Bahía Blanca, Buenos Aires',
    estado: 'En desarrollo',
    tipo: 'Residencial',
    anio: 2025,
    superficie: '15.600 m²',
    unidades: '15 unidades',
    avance: 57,
    resumen:
      'Nueva torre residencial en etapa de estructura, con foco en eficiencia energética.',
    descripcion: [
      'Ohiggins 237 es una torre residencial que actualmente se encuentra en etapa de estructura. El proyecto incorpora criterios de eficiencia energética desde el diseño: aislación de alto desempeño, ventilación cruzada y energía solar para espacios comunes.',
      'Representa nuestra apuesta por llevar construcción moderna a ciudades en crecimiento.',
    ],
    imagenPortada: '/proyectos/O 237/00_Vista general Dia.png',
    galeriaRenders: [
      { tipo: 'imagen', src: '/proyectos/O 237/00_Vista general Dia.png', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/00_Vista general Noche.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/A01_Dpto 1 - Semi Piso (1).jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/A01_Dpto 1 - Semi Piso (5).jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Enscape_2026-02-19-11-55-18.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Enscape_2026-02-19-11-59-40.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/GYM 02.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/S.U.M.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Terraza 02.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Terraza Piscina 01.jpg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Terraza Piscina 02.jpg', alt: 'Obra en construcción de Ohiggins 237' },
    ],
    galeriaObra: [
      { tipo: 'imagen', src: '/proyectos/O 237/Videos obra/cocina-enObra.jpeg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'imagen', src: '/proyectos/O 237/Videos obra/cocina-enObra-2.jpeg', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/pasillo-entrada.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/cocina-comedor.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/barra-cocina.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/comedor-vistas.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/balcon.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/pasillo-dormitorio-obra.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/pasillo-dormitorio2-obra.mp4', alt: 'Obra en construcción de Ohiggins 237' },
      { tipo: 'video', src: '/proyectos/O 237/Videos obra/vistas-obra-1.mp4', alt: 'Obra en construcción de Ohiggins 237' },
    ],
    destacado: false,
  },
  {
    slug: 'vyeites-1045',
    nombre: 'Edificio Vyeites 1045',
    ubicacion: 'Bahia Blanca, Buenos Aires',
    estado: 'En desarrollo',
    tipo: 'Residencial',
    anio: 2026,
    superficie: '22.800 m²',
    unidades: 'Oficinas AAA',
    avance: 25,
    resumen:
      'Edificio corporativo clase AAA con plantas flexibles y certificación de sustentabilidad.',
    descripcion: [
      'Nodo Corporativo es un edificio de oficinas clase AAA en etapa de proyecto. Ofrece plantas libres y flexibles, capaces de adaptarse a distintas formas de trabajo, con foco en el bienestar de las personas.',
      'Apunta a obtener certificación de construcción sustentable, en línea con nuestro compromiso de modernizar el modo en que se construye.',
    ],
    imagenPortada: '/proyectos/nodo-exterior.png',
    galeriaObra: [
      { tipo: 'video', src: '/proyectos/V 1045/dormitorio-balcon.mp4', alt: 'Render exterior de Nodo Corporativo' },
      { tipo: 'video', src: '/proyectos/V 1045/balcon-dormitorio.mp4', alt: 'Interior de oficinas de Nodo Corporativo' },
      { tipo: 'video', src: '/proyectos/V 1045/hombre-techo.mp4', alt: 'Interior de oficinas de Nodo Corporativo' },
      { tipo: 'video', src: '/proyectos/V 1045/pasillo pieza.mp4', alt: 'Interior de oficinas de Nodo Corporativo' },
      { tipo: 'video', src: '/proyectos/V 1045/dormitorio-1.mp4', alt: 'Interior de oficinas de Nodo Corporativo' },
      { tipo: 'video', src: '/proyectos/V 1045/dormitorio.mp4', alt: 'Interior de oficinas de Nodo Corporativo' },
    ],
    destacado: false,
  },
  {
    slug: 'yrigoyen-358',
    nombre: 'Edificio Yrigoyen 358',
    ubicacion: 'Bahia Blanca, Buenos Aires',
    estado: 'En desarrollo',
    tipo: 'Residencial',
    anio: 2021,
    superficie: '12.300 m²',
    unidades: '64 unidades',
    avance: 50,
    resumen:
      'Edificio de baja altura con terrazas verdes escalonadas y amenities integrados.',
    descripcion: [
      'Edificio Yrigoyen 358 es un edificio residencial de baja altura que hace de las terrazas verdes su gran protagonista. Cada nivel se retira para generar espacios exteriores propios cubiertos de vegetación.',
      'El proyecto integra amenities de calidad —pileta, gimnasio y salón de usos múltiples— en una escala amable y cercana.',
    ],
    imagenPortada: '/proyectos/Y 358/dia.png',
    galeriaRenders: [
      { tipo: 'imagen', src: '/proyectos/Y 358/dia.png', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/NOCHE.png', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/Render portada revista.jpg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/cocina(1).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/comedor(1).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/comedor(2).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/comedor(3).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/comedor(4).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/dormitorio(1).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/dormitorio(2).jpeg', alt: 'Fachada con terrazas verdes de Edificio Yrigoyen 358' },
    ],
    galeriaObra: [
      { tipo: 'imagen', src: '/proyectos/Y 358/En Obra/construyendo(1).jpeg', alt: 'Hormigoneando Edificio Yrigoyen 358' },
      { tipo: 'imagen', src: '/proyectos/Y 358/En Obra/construyendo(2).jpeg', alt: 'Hormigoneando Edificio Yrigoyen 358' },
      { tipo: 'video', src: '/proyectos/Y 358/En Obra/hormigoneando(1).mp4', alt: 'Hormigoneando Edificio Yrigoyen 358' },
      { tipo: 'video', src: '/proyectos/Y 358/En Obra/hormigoneando(2).mp4', alt: 'Hormigoneando Edificio Yrigoyen 358' },
    ], 
    destacado: false,
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
