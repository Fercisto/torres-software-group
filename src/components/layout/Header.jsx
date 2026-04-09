import Logo from "../ui/Logo"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 py-7">
          
          <Logo />

          <ul className="flex items-center gap-6">
            <li><a href="#inicio" className="hover:text-gray-600">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-gray-600">Servicios</a></li>
            <li><a href="#soluciones" className="hover:text-gray-600">Soluciones</a></li>
            <li><a href="#proyectos" className="hover:text-gray-600">Proyectos</a></li>
            <li><a href="#contacto" className="hover:text-gray-600">Contacto</a></li>
            <li><a href="#contacto" className="bg-black text-white hover:text-gray-100 py-2 px-4 rounded-2xl">Comenzar</a></li>
          </ul>
        </nav>
    </header>
  )
}
