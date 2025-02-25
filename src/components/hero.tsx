import { EventosSection } from "./Landing/Categories";
import heroimg from "../assets/herosection.jpeg"


export function Hero() {
  return (
    <section className="relative h-screen font-['Poppins', sans-serif]">
      <div className="absolute inset-0">
        <img src={heroimg} 
         alt="Hero Background" 
         className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative flex flex-col justify-center h-full">
        <div className="max-w-3xl text-white pl-[5%] p-5 z-10 mt-20">
          {" "}
         
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            "Tu proximo gran evento
            <br />
            empieza aquí"
          </h1>
          <p className="text-lg md:text-xl mb-5">
            Explora una amplia variedad de <br />
            eventos, inscríbete con facilidad y <br />
            gestiona tus asistencias en un solo <br />
            lugar.
          </p>
          <button className="text-base md:text-lg px-6 py-3 bg-[#222B60] text-white font-normal rounded hover:bg-[#3253c0] transition-colors duration-300">
            Explorar
          </button>
        </div>
      </div>
      <EventosSection/>
    </section>
  )
}


