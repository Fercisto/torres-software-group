import { LuAward, LuUsers, LuTrendingUp, LuMapPin } from "react-icons/lu";

const values = [
  { icon: LuAward,      title: "Excelencia",    description: "Compromiso con la calidad en cada proyecto" },
  { icon: LuUsers,      title: "Equipo Experto", description: "Profesionales altamente capacitados" },
  { icon: LuTrendingUp, title: "Innovación",     description: "Soluciones con tecnología de vanguardia" },
];

export default function Info() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center md:gap-12 gap-y-12 py-5 md:py-16 ">
        <div className="flex-1 flex flex-col items-center justify-center bg-transparent gap-8">

          <div className="relative">
            <img src="https://picsum.photos/600/400" alt="placeholder" className="rounded-3xl z-0"/>

            <div className="bg-white rounded-xl absolute -right-4 -bottom-4 flex items-start gap-x-2 px-4 py-2 shadow-lg">
              <div className="flex items-center justify-center p-3">
                <LuMapPin size={32} className="text-black"/>
              </div>
              <div className="flex flex-col gap-y-1">
                <h4 className="text-lg font-bold text-nowrap">
                  Durango, México
                </h4>
                <p className="text-sm text-gray-500 text-nowrap">
                  Sede Principal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex-1 flex flex-col items-center justify-between gap-y-8 bg-transparent">

            <h1 className="text-black text-4xl md:text-6xl font-bold flex-1 ">
                Innovación y Tecnología
            </h1>

            <div className="flex-1 flex flex-col items-center justify-between gap-y-2">
              <p className="text-gray-600 text-sm md:text-lg">
                En Torres Software Group, transformamos ideas en realidades digitales. Somos un equipo de expertos apasionados por la tecnología, dedicados a crear soluciones innovadoras que impulsan el crecimiento de nuestros clientes.
              </p>
              <p className="text-gray-600 text-sm md:text-lg">
                Desde nuestra sede en Durango, México, servimos a clientes nacionales e internacionales, ofreciendo desarrollo web de última generación, aplicaciones móviles intuitivas y software de escritorio robusto.
              </p>
            </div>

            <div className="w-full flex flex-col items-center justify-between gap-y-5 mx-2">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex-1 w-full flex items-center justify-between gap-x-8 bg-[#F7F7F7] rounded-xl border border-[#DEDEDE] px-6 py-2 inset-shadow-xl">
                  <div className="basis-1/6 p-4 w-full h-full bg-[#DDDDDD] flex items-center justify-center rounded-lg">
                    <Icon size={32} className="text-black" />
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
