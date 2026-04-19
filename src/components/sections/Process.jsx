import { LuLightbulb, LuPalette, LuCodeXml, LuRocket } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Process() {
  return (
    <div className="mx-auto max-w-7xl py-8 space-y-5">

      <motion.div
        className="max-w-xl mx-auto space-y-3"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <h2 className="text-white text-center font-bold text-4xl md:text-6xl">Nuestro Proceso</h2>
        <p className="text-gray-300 text-center text-sm md:text-lg">Un enfoque estructurado y probado para transformar tus ideas en realidad</p>
      </motion.div>

      <motion.div
        className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-5"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
      >
        {services.map(({ icon: Icon, title, description, number}) => (
          <motion.div
            key={title}
            className="bg-[#0d0d0d] p-6 border border-gray-700 rounded-2xl space-y-3"
            variants={fadeUp}
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-800">
                <Icon size={24} className="text-white" />
              </div>
              <span className="text-2xl font-black text-gray-600">{number}</span>
            </div>
            <span className="font-bold text-lg text-white block">{title}</span>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='flex items-center justify-center pt-5'
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <Link to="/contacto" className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold px-8 py-3 text-base rounded-full">
          Comencemos a trabajar juntos
        </Link>
      </motion.div>

    </div>
  );
}
