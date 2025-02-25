"use client"

import type React from "react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/logo.png"

export function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    surnameP: "",
    surnameM: "",
  })

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  const handleRegisterClick = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, email, password, confirmPassword } = formData
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, complete todos los campos.")
      return
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.")
      return
    }
    alert("Formulario enviado con éxito.")
    handleCloseModal()
  }

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-md bg-transparent">
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-12 w-auto" />
          <div className="flex gap-4">
            <Link
              to="/login"
              className="border border-white rounded-full px-4 py-2 text-white hover:shadow-lg transition flex items-center justify-center"
            >
              Iniciar Sesión
            </Link>
            <button
              className="bg-white text-indigo-900 rounded-full px-4 py-2 hover:bg-indigo-900 hover:text-white transition"
              onClick={handleRegisterClick}
            >
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center
          ${showModal ? "opacity-100 visible" : "opacity-0 invisible"}
          transition-all duration-300 ease-in-out`}
      >
        {/* Overlay con blur */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm
            ${showModal ? "opacity-100" : "opacity-0"}
            transition-opacity duration-300`}
          onClick={handleCloseModal}
        />

        {/* Modal Content */}
        <div
          className={`relative w-full max-w-sm mx-4 bg-white rounded-xl shadow-2xl
            transform transition-all duration-300 ease-out
            ${showModal ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"}`}
        >
          {/* Botón de cerrar */}
          <button
            onClick={handleCloseModal}
            className="absolute right-4 top-4 p-1 text-gray-400 hover:text-gray-600
              hover:bg-gray-100 rounded-full transition-all duration-200"
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Contenido del formulario */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900">Registrarse</h2>
            <p className="text-sm text-gray-500 mt-1">Crea una nueva cuenta</p>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Nombre"
              />

              <input
                type="text"
                name="surnameP"
                value={formData.surnameP}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Apellido Paterno"
              />

              <input
                type="text"
                name="surnameM"
                value={formData.surnameM}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Apellido Materno"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Correo Electrónico"
              />

              {/* Campo Contraseña con botón para mostrar */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg pr-10"
                  placeholder="Contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-2.5 text-gray-600 hover:text-gray-900"
                >
                  {showPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              {/* Campo Confirmar Contraseña con botón para mostrar */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg pr-10"
                  placeholder="Confirmar Contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-2.5 text-gray-600 hover:text-gray-900"
                >
                  {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>

              <button
                type="submit"
                className="w-full mt-4 px-4 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
