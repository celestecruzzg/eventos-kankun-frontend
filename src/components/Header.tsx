"use client"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12 w-auto" />
        <div>
          <Link
            to="/login"
            className="bg-white text-indigo-900 rounded-full px-6 py-2.5 hover:bg-indigo-900 hover:text-white transition-all duration-300 inline-flex items-center justify-center"
          >
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </header>
  )
}