import { LuMail, LuArrowRight } from 'react-icons/lu';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl py-8 space-y-5">

      <motion.div
        className="max-w-xl mx-auto space-y-3"
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
      >
        <h2 className="text-black text-center font-bold text-4xl md:text-6xl">Hablemos</h2>
        <p className="text-gray-500 text-center text-sm md:text-lg">Cuéntanos tu idea y te respondemos a la brevedad</p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto"
        initial="hidden" whileInView="visible" viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } } }}
      >
        <form className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5">

          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Nombre <span className="text-gray-600">(opcional)</span></label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Email <span className="text-indigo-400">*</span></label>
              <div className="relative">
                <LuMail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Mensaje <span className="text-gray-600">(opcional)</span></label>
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-x-2"
          >
            <span>Enviar mensaje</span>
            <LuArrowRight size={18} />
          </button>

        </form>
      </motion.div>

    </div>
  );
}
