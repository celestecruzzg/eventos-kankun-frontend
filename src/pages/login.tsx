"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const sanitizedValue = value.replace(/[<>[\]{}]/g, "")
    setFormData({ ...formData, [name]: sanitizedValue })
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[<>[\]{}]/g, "")
    setVerificationCode(sanitizedValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#93b1fc] flex items-center justify-center p-4 overflow-hidden">
      <div
        className={`bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row
          transform transition-all duration-700 ease-out
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {/* Resto del código permanece igual */}
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="space-y-6">
            <div
              className={`space-y-2 transform transition-all duration-700 delay-300
                ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
            >
              <h1 className="text-3xl font-bold text-gray-900">Iniciar sesión</h1>
              <p className="text-gray-600">Ingresa tus credenciales para acceder</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div
                  className={`transform transition-all duration-700 delay-400
                    ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                      transform transition-all duration-200"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div
                  className={`transform transition-all duration-700 delay-500
                    ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                >
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        transform transition-all duration-200"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500
                        hover:text-gray-700 transition-colors duration-200"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div
                className={`text-right transform transition-all duration-700 delay-600
                  ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button
                type="submit"
                className={`w-full bg-blue-500 text-white py-2 px-4 rounded-lg 
                  hover:bg-blue-950 transform transition-all duration-200
                  hover:scale-[1.02] active:scale-[0.98]
                  ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                style={{ transitionDelay: "700ms" }}
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative h-64 lg:h-auto overflow-hidden">
          <div
            className={`absolute inset-0 transform transition-all duration-1000 delay-300
              ${isLoaded ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
          >
            <img
              src={new URL("../assets/images/evento-kankun.jpg", import.meta.url).href || "/placeholder.svg"}
              alt="Eventos Kankun Venue"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div
                className={`text-center transform transition-all duration-700 delay-700
                  ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              >
                <h2 className="text-4xl font-bold text-white mb-2">Eventos</h2>
                <h1 className="text-6xl font-bold text-white">KANKUN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Verificación */}
      <div
        className={`fixed inset-0 flex items-center justify-center transition-all duration-300
          ${modalOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
        <div
          className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative
            transform transition-all duration-300
            ${modalOpen ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-4 opacity-0"}`}
        >
          <h2 className="text-xl font-bold mb-4">Verificación de Código</h2>
          <input
            type="text"
            placeholder="Ingrese el código"
            className="border p-2 w-full mb-2 rounded focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={verificationCode}
            onChange={handleCodeChange}
          />
          <div className="flex justify-end mt-4 space-x-2">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded
                hover:bg-green-600 transform transition-all duration-200
                hover:scale-[1.02] active:scale-[0.98]"
            >
              Verificar
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded
                hover:bg-red-600 transform transition-all duration-200
                hover:scale-[1.02] active:scale-[0.98]"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}