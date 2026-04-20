import { LuAward, LuUsers, LuTrendingUp, LuMapPin } from "react-icons/lu";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const values = [
  { icon: LuAward,      title: "Excelencia",    description: "Compromiso con la calidad en cada proyecto" },
  { icon: LuUsers,      title: "Equipo Experto", description: "Profesionales altamente capacitados" },
  { icon: LuTrendingUp, title: "Innovación",     description: "Soluciones con tecnología de vanguardia" },
];

const images = [
  { avif: "/images/durango1.avif", webp: "/images/durango1.webp", jpg: "/images/durango1.jpg" },
  { avif: "/images/durango2.avif", webp: "/images/durango2.webp", jpg: "/images/durango2.jpg" },
  { avif: "/images/durango3.avif", webp: "/images/durango3.webp", jpg: "/images/durango3.jpg" },
];

export default function Info() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center md:gap-8 gap-y-12 py-5 md:py-16">
      <div className="w-full md:flex-[1.2] flex flex-col items-center justify-center bg-transparent gap-8">
        <div className="relative w-full mb-3">
          <div className="relative overflow-hidden rounded-3xl aspect-[3/2] w-full">
            {images.map((img, i) => (
              <motion.picture
                key={i}
                animate={{ opacity: i === current ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <source srcSet={img.avif} type="image/avif" />
                <source srcSet={img.webp} type="image/webp" />
                <img
                  src={img.jpg}
                  alt={`Durango, México ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.picture>
            ))}
          </div>

          <div className="flex bg-indigo-600 rounded-xl absolute right-4 -bottom-6 items-start gap-x-2 px-4 py-2 shadow-lg shadow-indigo-200 w-fit">
            <div className="flex items-center justify-center p-3">
              <LuMapPin size={32} className="text-white" />
            </div>
            <div className="flex flex-col gap-y-1">
              <h4 className="text-lg font-bold text-nowrap text-white">Durango, México</h4>
              <p className="text-sm text-indigo-200 text-nowrap">Sede Principal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex-1 flex flex-col items-center justify-between gap-y-8 bg-transparent">
        <h1 className="text-black text-4xl md:text-6xl font-bold flex-1 text-center md:text-left w-full">
          Innovación y <span className="text-indigo-600">Tecnología</span>
        </h1>

        <div className="flex-1 flex flex-col items-center justify-between gap-y-2 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-lg">
            En Torres Software Group, transformamos ideas en realidades digitales. Somos un equipo de expertos apasionados por la tecnología, dedicados a crear soluciones innovadoras que impulsan el crecimiento de nuestros clientes.
          </p>
          <p className="text-gray-600 text-sm md:text-lg">
            Desde nuestra sede en Durango, México, servimos a clientes nacionales e internacionales, ofreciendo desarrollo web de última generación, aplicaciones móviles intuitivas y software de escritorio robusto.
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-between gap-y-5 mx-2">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex-1 w-full flex items-center justify-between gap-x-8 bg-indigo-50 rounded-xl border border-indigo-100 px-6 py-2">
              <div className="basis-1/6 p-4 w-full h-full bg-indigo-100 flex items-center justify-center rounded-lg">
                <Icon size={32} className="text-indigo-600" />
              </div>
              <div className="basis-5/6">
                <h4 className="text-lg font-bold">{title}</h4>
                <p className="text-sm text-gray-500 md:text-nowrap text-wrap">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
