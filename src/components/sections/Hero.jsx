export default function Hero() {
  return (
    <main className="flex items-center gap-12 py-5 md:py-16">
        <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-black text-5xl md:text-7xl font-bold">
                Construyendo Soluciones Digitales Que Escalan
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
                Especialistas en desarrollo web, aplicaciones móviles y software de escritorio. Transformamos ideas en soluciones tecnológicas innovadoras.
            </p>
            <div className="flex flex-col md:flex-row text-center gap-4">
                <a href="#contacto" className="bg-black text-white px-8 py-3 rounded-full inline-block transition-transform md:hover:scale-105">Iniciar Tu Proyecto</a>
                <a href="#servicios" className="border border-black text-black px-8 py-3 rounded-full inline-block transition-transform md:hover:scale-105">Ver Servicios</a>
            </div>
        </div>

        <div className="hidden md:flex flex-1 overflow-hidden">
            <img src="../../public/images/hero-image.webp" alt="Imagen Hero" className="w-full h-full object-cover rounded-2xl" />
        </div>
    </main>
  )
}
