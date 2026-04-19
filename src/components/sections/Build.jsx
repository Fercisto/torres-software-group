import { Link } from 'react-router-dom'
import { LuArrowRight, LuMail } from 'react-icons/lu'

export default function Build() {
  return (
    <div className="mx-auto max-w-7xl py-8 flex items-center justify-center">
        <div className='relative overflow-hidden bg-black max-w-5xl rounded-3xl flex flex-col items-center justify-center px-4 py-20 gap-y-8'>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <h1 className='text-4xl md:text-6xl text-white font-bold text-center'>
                Construyamos Algo Poderoso Juntos
            </h1>

            <h3 className='text-lg md:text-xl text-[#A7ADB8] max-w-3xl text-center'>
                ¿Listo para llevar tu proyecto al siguiente nivel? Nuestro equipo está preparado para convertir tu visión en realidad.
            </h3>

            <div className="flex items-center justify-between gap-x-3">
                <Link className='bg-indigo-600 hover:bg-indigo-500 transition-colors text-white rounded-3xl px-8 py-4 text-base flex items-center justify-between gap-1'>
                    <span>Iniciar proyecto</span>
                    <LuArrowRight size={22} />
                </Link>
                <Link className='bg-transparent border border-white rounded-3xl px-8 py-4 text-white flex items-start justify-between gap-1'>
                    <LuMail size={22} />
                    <span>Contactar el equipo</span>
                </Link>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

            <p className='text-[#A7ADB8]'>
                O escríbenos directamente a <span className='font-semibold underline'>hola@torressoftware.com</span> 
            </p>  
        </div>
    </div>
  )
}
