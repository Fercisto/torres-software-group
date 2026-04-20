import { useState } from "react";
import Logo from "../ui/Logo"
import { MdMenu, MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      <header className="sticky top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <nav className="mx-auto max-w-7xl px-4 md:px-8 flex items-center py-4">

          <Logo />
          <button
            onClick={() => setMenu(prev => !prev)}
            className="md:hidden ml-auto p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menu ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                {menu ? <MdClose size={24} /> : <MdMenu size={24} />}
              </motion.div>
            </AnimatePresence>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex flex-row items-center gap-1 ml-auto">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="ml-4">
              <a
                href="#contacto"
                className="block text-center px-5 py-2 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
              >
                Comenzar
              </a>
            </li>
          </ul>

        </nav>
      </header>

      {/* Mobile menu — fuera del header para evitar stacking context */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[60] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <Logo />
              <button
                onClick={() => setMenu(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <MdClose size={24} />
              </button>
            </div>

            <ul className="flex flex-col gap-1 px-4 pt-4">
              {navLinks.map(({ href, label }, i) => (
                <motion.li
                  key={href}
                  className="w-full"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <a
                    href={href}
                    className="block text-left px-4 py-3 text-xl font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
                    onClick={() => setMenu(false)}
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="mt-2 w-full"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + navLinks.length * 0.07 }}
              >
                <a
                  href="#contacto"
                  className="block text-left px-4 py-3 text-xl font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-xl transition-colors"
                  onClick={() => setMenu(false)}
                >
                  Comenzar
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
