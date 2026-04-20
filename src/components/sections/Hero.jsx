import { LuArrowRight } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay } }),
}

export default function Hero() {
  const [ready, setReady] = useState(false)
  const [headerH, setHeaderH] = useState(0)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  useEffect(() => {
    const header = document.getElementById('main-header')
    if (!header) return
    const update = () => setHeaderH(header.offsetHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(header)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="relative flex items-center" style={{ minHeight: headerH ? `calc(100vh - ${headerH}px)` : '100vh' }}>
      {ready && <Particles
        id="hero-particles"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: 'transparent' } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            number: { value: 70, density: { enable: true, area: 800 } },
            color: { value: '#6366f1' },
            links: {
              enable: true,
              color: '#6366f1',
              distance: 150,
              opacity: 0.35,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
            opacity: { value: 0.5 },
            size: { value: { min: 1.5, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 w-full h-full"
      />}

      <main className="relative w-full mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-20">
        {/* Text column */}
        <div className="flex-1 flex flex-col gap-7 items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-black text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            initial="hidden" animate="visible" custom={0.1} variants={fadeUp}
          >
            <span className="block sm:inline">Construyendo</span>{' '}
            <span className="block sm:inline text-indigo-600">Soluciones</span>{' '}
            <span className="block sm:inline">Digitales</span>{' '}
            <span className="block sm:inline">Que Escalan</span>
          </motion.h1>

          <motion.p
            className="text-gray-500 text-base md:text-lg max-w-lg leading-relaxed"
            initial="hidden" animate="visible" custom={0.2} variants={fadeUp}
          >
            Especialistas en desarrollo web, aplicaciones móviles y software de escritorio. Transformamos ideas en soluciones tecnológicas innovadoras.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row text-center gap-4 pt-2 w-full md:w-auto"
            initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
          >
            <a href="#contacto" className="bg-indigo-600 hover:bg-indigo-500 transition-all text-white px-8 py-3.5 rounded-full inline-flex items-center justify-center gap-x-2 md:hover:scale-105 shadow-lg shadow-indigo-200">
              <span>Iniciar Tu Proyecto</span>
              <LuArrowRight size={18} />
            </a>
            <a href="#servicios" className="border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 text-gray-700 px-8 py-3.5 rounded-full inline-block transition-all md:hover:scale-105">
              Ver Servicios
            </a>
          </motion.div>

        </div>

        {/* Image column */}
        <motion.div
          className="hidden md:flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative w-full">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-indigo-100 rounded-3xl blur-2xl opacity-60" />
            <picture className="relative block">
              <source srcSet="/images/hero-image.avif" type="image/avif" />
              <source srcSet="/images/hero-image.webp" type="image/webp" />
              <img
                src="/images/hero-image.png"
                alt="Desarrollador trabajando"
                className="relative w-full h-auto max-h-[280px] md:max-h-[700px] object-contain drop-shadow-2xl"
              />
            </picture>
          </div>
        </motion.div>
      </main>
    </div>
  )
}
