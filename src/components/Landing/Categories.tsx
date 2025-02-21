import React from "react";
import "./Categories.css"
import tarjetaUno from "../../assets/tarjetaUno.png"
import tarjetaDos from "../../assets/tarjetaDos.png"
import tarjetaTres from "../../assets/tarjetasTres.png"
import { Link } from "react-router-dom";

export function EventosSection() {
  return (
    <div>
      <nav className="nav-catg">
        <Link to="/registro" className="nav-item">
          <div className="nav-icon">🎵</div>
          <span>Música y Aficiones</span>
        </Link>
        <Link to="/registro" className="nav-item">
          <div className="nav-icon">💼</div>
          <span>Negocios</span>
        </Link>
        <Link to="/registro" className="nav-item">
          <div className="nav-icon">🍽️</div>
          <span>Comida y Bebida</span>
        </Link>
        <Link to="/registro" className="nav-item">
          <div className="nav-icon">📅</div>
          <span>Días Feriados</span>
        </Link>
      </nav>

      <h1 className="main-title">¿Qué te espera?</h1>

      <div className="cards-container">
        <div className="card">
          <img
            src={tarjetaUno}
            alt="Personas en un evento gaming"
          />
          <div className="card-content">Más de 200 millones <br/> de eventos</div>
        </div>
        <div className="card">
          <img
            src={tarjetaDos}
            alt="Personas en una reunión social"
          />
          <div className="card-content">Experiencias únicas</div>
        </div>
        <div className="card">
          <img
            src={tarjetaTres}
            alt="Fuegos artificiales en un evento"
          />
          <div className="card-content">Diferentes  <br/>experiencias y <br/> sensaciones</div>
        </div>
      </div>

      <section className="faq-section">
        <h2 className="faq-title">Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-card">
            <h3>¿Cómo me registro <br/> en un evento?</h3>
            <p>Solo necesitas tener una cuenta. Busca un <br/> evento, haz clic en “registrarme” y <br/> sigue los pasos.</p>
          </div>
          <div className="faq-card">
            <h3>¿Los eventos son <br/> gratuitos?</h3>
            <p>
              Algunos sí, otros tienen costo. Tenemos <br/>  una opción de filtrado para eventos <br/> gratuitos o de pago.
            </p>
          </div>
          <div className="faq-card">
            <h3>¿Puedo cancelar mi <br/> asistencia?</h3>
            <p>Sí, desde tu portal de usuario puedes <br/> cancelar la inscripción en cualquier<br/>  momento.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
