import "./LandingHeader.css"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <header className="headeruno">
      <div className="container">
      <img src={logo} alt="Logo" className="header-logo" /> 
        <nav className="nav">
          <Link to ="/" className="nav-link">Home</Link>
          <Link to="#" className="nav-link">Eventos</Link>
          <Link to="/" className="nav-link">Dudas</Link>
        </nav>
        <div className="buttons">
          <button className="login">Iniciar Sesion</button>
          <button className="register">Registrarse</button>
        </div>
      </div>
    </header>
  )
}
