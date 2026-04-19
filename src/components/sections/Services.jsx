import { MdMonitor, MdAutorenew, MdHub, MdCode } from 'react-icons/md';

const services = [
  {
    icon: MdMonitor,
    title: 'Plataformas Web Escalables',
    description: 'Construimos aplicaciones web robustas y escalables, desde el MVP inicial hasta sistemas de alta complejidad.',
  },
  {
    icon: MdAutorenew,
    title: 'Automatización de Procesos',
    description: 'Optimizamos flujos operativos mediante tecnología, reduciendo tiempos de ejecución y márgenes de error.',
  },
  {
    icon: MdHub,
    title: 'Integración de Sistemas',
    description: 'Unificamos tus herramientas y plataformas en un ecosistema coherente y sin interrupciones.',
  },
  {
    icon: MdCode,
    title: 'Soluciones a Medida',
    description: 'Desarrollamos software personalizado que se ajusta con precisión a los requerimientos de tu organización.',
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl py-8 space-y-5">

      <div className="max-w-xl mx-auto space-y-3">
        <h2 className="text-white text-center font-bold text-4xl md:text-6xl">Nuestros Servicios</h2>
        <p className="text-gray-300 text-center text-sm md:text-lg">Ofrecemos soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-5">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-[#0d0d0d] p-6 border border-gray-700 rounded-2xl space-y-3"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800">
              <Icon size={24} className="text-white" />
            </div>
            <span className="font-bold text-lg text-white block">{title}</span>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
