import { LuMail, LuMapPin } from 'react-icons/lu'

const navLinks = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#soluciones',label: 'Soluciones' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-black">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-12 flex flex-col md:flex-row gap-10 md:gap-16">

        {/* Brand */}
        <div className="flex flex-col gap-4 flex-1">
          <a href="#inicio" className="font-bold text-xl hover:text-indigo-600 transition-colors">Torres Software Group</a>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Transformamos ideas en soluciones tecnológicas innovadoras desde Durango, México.
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="mailto:contacto@torressoftware.com" className="flex items-center gap-2 hover:text-black transition-colors">
              <LuMail size={14} />
              contacto@torressoftware.com
            </a>
            <span className="flex items-center gap-2">
              <LuMapPin size={14} />
              Durango, México
            </span>
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-widest">Navegación</span>
          <ul className="flex flex-col gap-2">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="text-sm text-gray-500 hover:text-black transition-colors">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-widest">Servicios</span>
          <ul className="flex flex-col gap-2">
            {['Plataformas Web', 'Automatización', 'Integración de Sistemas', 'Software a Medida'].map(s => (
              <li key={s} className="text-sm text-gray-500">{s}</li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-4 flex-1 md:items-end">
          <span className="text-sm font-semibold text-gray-700 uppercase tracking-widest">¿Tienes un proyecto?</span>
          <p className="text-sm text-gray-500 md:text-right max-w-xs leading-relaxed">
            Cuéntanos tu idea y construyamos algo juntos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-indigo-600 hover:bg-indigo-500 transition-colors text-white text-sm font-medium px-6 py-2.5 rounded-full"
          >
            Iniciar proyecto
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <span>© {new Date().getFullYear()} Torres Software Group. Todos los derechos reservados.</span>
          <span>Hecho en Durango, México</span>
        </div>
      </div>
    </footer>
  )
}
