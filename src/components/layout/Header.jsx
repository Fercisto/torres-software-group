import { useState } from "react";
import Logo from "../ui/Logo"
import { MdMenu, MdClose } from 'react-icons/md';

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#soluciones", label: "Soluciones" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  
  const [menu, setMenu] = useState(false);

  return (
    <header className="mx-auto max-w-7xl px-4 md:px-8 sticky top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="flex flex-col items-center md:flex-row py-4">

        <div className="flex items-center justify-between w-full">
          <Logo />
          <button
            onClick={() => setMenu(prev => !prev)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
          </button>
        </div>

        <ul className={`
          ${menu ? "flex" : "hidden"} md:flex
          flex-col md:flex-row
          items-center gap-1 md:gap-1
          mt-4 md:mt-0 pb-4 md:pb-0
          border-t md:border-t-0 border-gray-100
          w-full md:w-auto md:ml-auto
        `}>
          {navLinks.map(({ href, label }) => (
            <li key={href} className="w-full md:w-auto">
              <a
                href={href}
                className="block text-center md:text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="w-full md:w-auto mt-2 md:mt-0 md:ml-4">
            <a
              href="#contacto"
              className="block text-center px-5 py-2 rounded-2xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
              onClick={() => setMenu(false)}
            >
              Comenzar
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
}
