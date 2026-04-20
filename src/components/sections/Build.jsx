import { LuArrowRight, LuMail } from 'react-icons/lu'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Build() {
  return (
    <div className="mx-auto max-w-7xl py-8 flex items-center justify-center">
        <motion.div
          className='relative overflow-hidden bg-black max-w-5xl rounded-3xl flex flex-col items-center justify-center px-4 py-20 gap-y-8'
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
        >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <motion.h1 className='text-4xl md:text-6xl text-white font-bold text-center' variants={fadeUp}>
                Construyamos Algo Poderoso Juntos
            </motion.h1>

            <motion.h3 className='text-lg md:text-xl text-[#A7ADB8] max-w-3xl text-center' variants={fadeUp}>
                ¿Listo para llevar tu proyecto al siguiente nivel? Nuestro equipo está preparado para convertir tu visión en realidad.
            </motion.h3>

            <motion.div className="flex flex-col md:flex-row items-center justify-between gap-3" variants={fadeUp}>
                <a href="#contacto" className='bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-3xl px-8 py-4 text-base flex items-center justify-center gap-1 w-full md:w-auto'>
                    <span>Iniciar proyecto</span>
                    <LuArrowRight size={22} />
                </a>
                <a href="mailto:hola@torressoftware.com" className='bg-transparent hover:bg-white/10 transition-colors border border-white rounded-3xl px-8 py-4 text-white flex items-center justify-center gap-2 w-full md:w-auto'>
                    <LuMail size={22} />
                    <span>Escribirnos directo</span>
                </a>
            </motion.div>

        </motion.div>
    </div>
  )
}
