import React from "react";
import "./Hero.css"
import {useState} from "react"
import { EventosSection } from "./Categories";



export function Hero() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleExploreClick = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Formulario enviado con éxito.");
  };
  
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
          onClick={handleExploreClick}
          >
            Explorar
          </button>
         
        </div>
        
      </div>
      <div className="categories">
      <EventosSection/>
      </div>
      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Registrarse</h2>
            <p>Crea una nueva cuenta</p>
            <form onSubmit={handleSubmit}>
              <label>
              Nombre Completo:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
              </label>
              <label>
              Correo Electronico:
              <input type="email" name="email"  value={formData.email} onChange={handleChange} />
              </label>
              <label>
              Contraseña:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
              </label>
              <label>
              Confirmar Contraseña:
              <input type="password" name="confirm-password" value={formData.confirmPassword} onChange={handleChange} />
              </label>
              <button type="submit">Registrarse</button>
            </form>
          </div>
        </div>
      )
    }
    </section>

  )
}

