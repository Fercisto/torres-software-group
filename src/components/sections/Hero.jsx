import { LuArrowRight } from 'react-icons/lu'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay } }),
}

export default function Hero() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 flex items-center gap-12 py-5 md:py-16">
        <div className="flex-1 flex flex-col gap-6">
            <motion.h1
              className="text-black text-5xl md:text-7xl font-bold"
              initial="hidden" animate="visible" custom={0} variants={fadeUp}
            >
                Construyendo Soluciones Digitales Que Escalan
            </motion.h1>
            <motion.p
              className="text-gray-600 text-base md:text-lg"
              initial="hidden" animate="visible" custom={0.15} variants={fadeUp}
            >
                Especialistas en desarrollo web, aplicaciones móviles y software de escritorio. Transformamos ideas en soluciones tecnológicas innovadoras.
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row text-center gap-4"
              initial="hidden" animate="visible" custom={0.3} variants={fadeUp}
            >
                <a href="#contacto" className="bg-indigo-600 hover:bg-indigo-500 transition-transform text-white px-8 py-3 rounded-full inline-flex items-center justify-center gap-x-2 md:hover:scale-105">
                  <span>Iniciar Tu Proyecto</span>
                  <LuArrowRight size={18} />
                </a>
                <a href="#servicios" className="border border-black text-black px-8 py-3 rounded-full inline-block transition-transform md:hover:scale-105">Ver Servicios</a>
            </motion.div>
        </div>

        <motion.div
          className="hidden md:flex flex-1 overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
        >
            <img src="../../public/images/hero-image.webp" alt="Imagen Hero" className="w-full h-full object-cover rounded-2xl" />
        </motion.div>
    </main>
  )
}
