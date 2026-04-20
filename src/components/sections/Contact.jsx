import { useRef, useState, useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { motion as Motion } from 'framer-motion';
import { LuArrowRight, LuMail, LuPhone } from 'react-icons/lu';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FORMCARRY_URL = `https://formcarry.com/s/${import.meta.env.VITE_FORMCARRY_FORM_ID}`;

export default function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    if (!executeRecaptcha) {
      setStatus({ type: 'error', message: 'reCAPTCHA no está listo. Intenta de nuevo.' });
      return;
    }

    try {
      setIsSending(true);
      setStatus({ type: 'idle', message: '' });

      const token = await executeRecaptcha('contact');

      const formData = new FormData(formRef.current);

      const response = await fetch(FORMCARRY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: String(formData.get('user_name') || '').trim(),
          email: String(formData.get('user_email') || '').trim(),
          phone: String(formData.get('user_phone') || '').trim(),
          message: String(formData.get('message') || '').trim(),
          'g-recaptcha-response': token,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.code === 'FORM_ERROR') {
        throw new Error(data.message || 'Error al enviar el formulario.');
      }

      formRef.current?.reset();
      setStatus({ type: 'success', message: 'Mensaje enviado. Te responderemos lo antes posible.' });
    } catch (error) {
      console.error('Formcarry error:', error);
      setStatus({ type: 'error', message: 'No pudimos enviar el mensaje. Intenta de nuevo en un momento.' });
    } finally {
      setIsSending(false);
    }
  }, [executeRecaptcha]);

  return (
    <div className="mx-auto max-w-7xl py-8 space-y-5">
      <Motion.div
        className="max-w-xl mx-auto space-y-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-black text-center font-bold text-4xl md:text-6xl">Hablemos</h2>
        <p className="text-gray-500 text-center text-sm md:text-lg">
          Cuéntanos tu idea y te respondemos a la brevedad
        </p>
      </Motion.div>

      <Motion.div
        className="max-w-2xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 24 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.15 },
          },
        }}
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Nombre <span className="text-gray-600">(opcional)</span>
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Tu nombre"
                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-600">
                Email <span className="text-indigo-400">*</span>
              </label>
              <div className="relative">
                <LuMail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                />
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">
              Teléfono <span className="text-gray-600">(opcional)</span>
            </label>
            <div className="relative">
              <LuPhone
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="+52 000 000 0000"
                className="w-full bg-white border border-gray-300 rounded-xl pl-10 pr-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">
              Mensaje <span className="text-gray-600">(opcional)</span>
            </label>
            <textarea
              rows={4}
              name="message"
              placeholder="Cuéntanos sobre tu proyecto..."
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          {status.message ? (
            <p className={`text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSending}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-300 disabled:cursor-not-allowed transition-colors text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-x-2"
          >
            <span>{isSending ? 'Enviando...' : 'Enviar mensaje'}</span>
            <LuArrowRight size={18} />
          </button>
        </form>
      </Motion.div>
    </div>
  );
}
