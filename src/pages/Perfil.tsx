"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, Camera } from "lucide-react"

export default function UserProfile() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "Jill",
    lastName: "Valentine",
    email: "JillValentine@gmail.com",
    password: "jillUsuario2",
    phone: "+52 998 254 2345",
    region: "Mexico",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-[#9BB7EB] p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[350px_1fr] gap-6 bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Panel izquierdo - Información del perfil */}
        <div className="bg-[#222B60] p-8 text-white flex flex-col items-center">
          <h1 className="text-2xl font-semibold mb-2">Perfil de Participante</h1>
          <p className="text-slate-300 mb-8">Gestiona tu información</p>

          <div className="relative mb-4">
            <img
              src="https://i.pinimg.com/736x/6a/f8/9f/6af89fb8f3586b160b5dfd921bac2a0f.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
            />
            <button className="absolute bottom-0 right-0 p-2 bg-white text-[#222B60] rounded-full hover:bg-slate-100 transition-colors">
              <Camera className="h-4 w-4" />
            </button>
          </div>

          <h2 className="text-xl font-medium">
            {formData.firstName} {formData.lastName}
          </h2>
          <p className="text-slate-300 mb-4">Usuario</p>

          <button className="w-full bg-white/10 text-white py-2 px-4 rounded-md hover:bg-white/20 transition-colors">
            Cambiar Foto
          </button>
        </div>

        {/* Panel derecho - Formulario */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-2">Configuración del Perfil</h2>
          <p className="text-gray-500 mb-8">Actualiza la información de tu cuenta</p>

          <form className="space-y-6">
            {/* Nombre y Apellido */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent"
                />
              </div>
            </div>

            {/* Correo Electrónico */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent"
              />
            </div>

            {/* Contraseña */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent pr-24"
                />
                <div className="absolute right-0 top-0 h-full flex items-center gap-2 pr-2">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-1 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    Cambiar
                  </button>
                </div>
              </div>
            </div>

            {/* Número de Contacto */}
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Número de Contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent"
              />
            </div>

            {/* Región */}
            <div className="space-y-2">
              <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                Región
              </label>
              <select
                id="region"
                name="region"
                value={formData.region}
                onChange={(e) => setFormData((prev) => ({ ...prev, region: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1e2875] focus:border-transparent"
              >
                <option value="Mexico">México</option>
                <option value="USA">Estados Unidos</option>
                <option value="Canada">Canadá</option>
                <option value="Canada">España</option>
                <option value="Canada">Inglaterra</option>
              </select>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-between items-center pt-6">
              <div className="space-x-2">
              </div>
              <div className="space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1e2875] text-white rounded-md hover:bg-[#162057] transition-colors"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}