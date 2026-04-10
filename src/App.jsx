import './App.css'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'

function App() {

  return (
    <div>
      
      <Header />
      <Hero />

      <section className='relative bg-black overflow-hidden p-5'>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-indigo-600/20 rounded-full blur-[120px]" />
        </div>
        <Services />
      </section>

    </div>
  )
}

export default App
