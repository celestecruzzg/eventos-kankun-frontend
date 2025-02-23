import React from "react";
import { EventosSection } from "./Categories";


export function Hero() {
 
  return (
    <section className="relative h-screen">
      <div className="hero-overlay">
        <div className="hero-container">
          <h1 className="hero-title">"Tu proximo gran evento<br/> empieza aqui"</h1>
          <p className="hero-description">
            Explora una amplia variedad de <br/>eventos, inscríbete con facilidad y<br/> gestiona tus asistencias en un solo <br/>
            lugar.
          </p>
          <button 
          className="hero-button"
          >
            Explorar
          </button>
        </div>
      </div>
      <div className="categories">
      <EventosSection/>
      </div>
    </section>

  )
}

