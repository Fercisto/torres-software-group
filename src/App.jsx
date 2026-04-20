import './App.css'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Build from './components/sections/Build'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Info from './components/sections/Info'
import Process from './components/sections/Process'
import Services from './components/sections/Services'

function App() {

  return (
    <div>
      
      <Header />

      <section id="inicio">
        <Hero />
      </section>

      <section id="servicios" className='relative bg-black overflow-hidden p-5'>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>
        <Services />
      </section>

      <section id="soluciones">
        <Info />
      </section>

      <section id="proyectos" className='relative bg-black overflow-hidden p-5'>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>
        <Process />
      </section>

      <section id="contacto" className='bg-white p-5'>
        <Contact />
      </section>

      <section className='bg-black p-5'>
        <Build/>
      </section>

      <Footer />

    </div>
  )
}

export default App
