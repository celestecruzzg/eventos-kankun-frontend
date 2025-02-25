import React from "react";
import tarjetaUno from "../../assets/tarjetaUno.png"
import tarjetaDos from "../../assets/tarjetaDos.png"
import tarjetaTres from "../../assets/tarjetasTres.png"
import { Music, Briefcase, UtensilsCrossed, Calendar } from "lucide-react"

export function EventosSection() {
  return (
    <div className="bg-gradient-to-b from-[#273859] via-[#6178A2] to-[#87abed] ">
    <nav className="flex justify-center flex-wrap gap-10 lg:gap-40 bg-[#6d7dab] py-3 px-4">
      <a
        href="#"
        className="flex flex-col items-center 
        gap-2 text-white opacity-90 
        hover:opacity-100 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full
        bg-white/10 flex items-center bg-[#757575]
        justify-center">
          <Music className="w-6 h-6" />
        </div>
        <span>Música y Aficiones</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center 
        gap-2 text-white opacity-90 
        hover:opacity-100 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full 
        bg-white/10 flex items-center 
        justify-center">
          <Briefcase className="w-6 h-6" />
        </div>
        <span>Negocios</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center 
        gap-2 text-white opacity-90 
        hover:opacity-100 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full 
        bg-white/10 flex items-center bg-[#435898] 
        justify-center">
          <UtensilsCrossed className="w-6 h-6" />
        </div>
        <span>Comida y Bebida</span>
      </a>
      <a
        href="#"
        className="flex flex-col items-center 
        gap-2 text-white opacity-90 
        hover:opacity-100 transition-opacity"
      >
        <div className="w-12 h-12 rounded-full 
        bg-white/10 flex items-center bg-[#32364D]
        justify-center">
          <Calendar className="w-6 h-6" />
        </div>
        <span>Días Feriados</span>
      </a>
    </nav>

    <h1 className="text-center text-4xl 
    md:text-[2.5rem] text-white font-medium my-12">¿Qué te espera?</h1>

    <div className="grid grid-cols-1 
    sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 
    max-w-7xl mx-auto">
      <div className="relative aspect-square 
      rounded-2xl overflow-hidden">
        <img
          src={tarjetaUno}
          alt="Personas en un evento gaming"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[10%] 
        left-10 right-0 p-6 bg-gradient-to-t 
        from-black/50 to-transparent text-white 
        text-2xl md:text-[1.4rem] font-medium">
          Tu cantidad deseada <br /> de eventos
        </div>
      </div>
      <div className="relative aspect-square rounded-2xl overflow-hidden">
        <img
          src={tarjetaDos}
          alt="Personas en una reunión social"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[10%] left-10 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white text-2xl md:text-[1.4rem] font-medium">
          Experiencias únicas
        </div>
      </div>
      <div className="relative aspect-square rounded-2xl overflow-hidden">
        <img
          src={tarjetaTres}
          alt="Fuegos artificiales en un evento"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-[10%] left-10 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent text-white text-2xl md:text-[1.4rem] font-medium">
          Diferentes <br />
          experiencias y <br /> sensaciones
        </div>
      </div>
    </div>

    <section className="py-16 px-8">
      <h2 className="text-center text-3xl md:text-4xl text-white font-medium mb-12">Preguntas Frecuentes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        <div className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl">
          <h3 className="text-white text-lg mb-4">
            ¿Cómo me registro <br /> en un evento?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Solo necesitas tener una cuenta. Busca un <br /> evento, haz clic en "registrarme" y <br /> sigue los
            pasos.
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl">
          <h3 className="text-white text-lg mb-4">
            ¿Los eventos son <br /> gratuitos?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Algunos sí, otros tienen costo. Tenemos <br /> una opción de filtrado para eventos <br /> gratuitos o de
            pago.
          </p>
        </div>
        <div className="bg-black/30 backdrop-blur-lg p-8 rounded-2xl">
          <h3 className="text-white text-lg mb-4">
            ¿Puedo cancelar mi <br /> asistencia?
          </h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Sí, desde tu portal de usuario puedes <br /> cancelar la inscripción en cualquier
            <br /> momento.
          </p>
        </div>
      </div>
    </section>
  </div>

  );
}





   

