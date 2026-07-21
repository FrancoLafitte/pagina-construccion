import { Hero } from '@/components/home/hero'
import { Stats } from '@/components/home/stats'
import { Enfoque } from '@/components/home/enfoque'
import { ProyectosDestacados } from '@/components/home/proyectos-destacados'
import { CTA } from '@/components/home/cta'
import { VideoDestacado } from '@/components/home/video-destacado'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <VideoDestacado />
      <Enfoque />
      <ProyectosDestacados />
      <CTA />
    </>
  )
}
