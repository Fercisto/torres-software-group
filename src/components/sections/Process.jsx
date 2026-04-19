import { LuLightbulb, LuPalette, LuCodeXml, LuRocket } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: LuLightbulb,
    title: 'Planificar',
    description: 'Analizamos tus necesidades y objetivos para crear una estrategia sólida y efectiva',
    number: '01'
  },
  {
    icon: LuPalette,
    title: 'Diseñar',
    description: 'Creamos interfaces intuitivas y atractivas que ofrecen la mejor experiencia de usuario.',
    number: '02'
  },
  {
    icon: LuCodeXml,
    title: 'Lanzar',
    description: 'Construimos soluciones robustas utilizando las tecnologías más avanzadas del mercado.',
    number: '03'
  },
  {
    icon: LuRocket,
    title: 'Soluciones a Medida',
    description: 'Implementamos tu proyecto con éxito y brindamos soporte continuo para su crecimiento.',
    number: '04'
  },
];

export default function Process() {
  return (
    <div className="mx-auto max-w-7xl py-8 space-y-16 mb-10">

      <div className="max-w-lg mx-auto space-y-3 gap-y-6 flex flex-col items-center justify-center">
        <h2 className="text-white text-center font-bold text-7xl text-nowrap">Nuestro Proceso</h2>
        <p className="text-gray-300 text-center text-xl text-nowrap">Un enfoque estructurado y probado para transformar tus ideas en realidad</p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-5">
        {services.map(({ icon: Icon, title, description, number}) => (
          <div
            key={title}
            className="relative flex flex-col items-start justify-start h-full bg-gradient-to-br from-indigo-900/40 to-transparent p-6 border border-gray-700 rounded-2xl gap-y-3"
          >
            <div className="w-4 h-4 rounded-full bg-white absolute top-8 right-6" />
            <div className="w-fit flex flex-col items-center justify-between gap-y-3 rounded-xl bg-transparent">
                <h1 className='text-8xl font-black bg-gradient-to-b from-white to-white/10 bg-clip-text text-transparent'>{number}</h1>
                <div className='bg-[#252525] p-8 rounded-xl'>
                    <Icon size={38} className="text-white" />
                </div>
            </div>
            <span className="font-bold text-lg text-white block flex-1">{title}</span>
            <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <Link to="/contacto" className="bg-white text-black font-semibold px-8 py-3 text-xl rounded-full">                                                                                                                            
            Comencemos a trabajar juntos                                     
        </Link>
      </div>

    </div>
  );
}
