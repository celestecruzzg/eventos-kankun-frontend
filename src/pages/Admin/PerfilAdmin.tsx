"use client"

import type React from "react"

import { useState, useEffect } from "react"

export default function ConfiguracionAdmin() {
  const [showPassword, setShowPassword] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const [nombre, setNombre] = useState(() => localStorage.getItem("nombre") || "Jill")
  const [apellido, setApellido] = useState(() => localStorage.getItem("apellido") || "Valentine")
  const [email, setEmail] = useState(() => localStorage.getItem("email") || "JillValentine@gmail.com")
  const [telefono, setTelefono] = useState(() => localStorage.getItem("telefono") || "+52 998 254 2345")
  const [region, setRegion] = useState(() => localStorage.getItem("region") || "Mexico")
  const [permisos, setPermisos] = useState(() => {
    const savedPermisos = localStorage.getItem("permisos")
    return savedPermisos
      ? JSON.parse(savedPermisos)
      : {
          gestionParticipantes: true,
          configuracionSistema: true,
          rolesPermisos: true,
        }
  })
  const [guardadoExitoso, setGuardadoExitoso] = useState(false)

  useEffect(() => {
    // Actualizar localStorage cuando cambien los valores
    localStorage.setItem("nombre", nombre)
    localStorage.setItem("apellido", apellido)
    localStorage.setItem("email", email)
    localStorage.setItem("telefono", telefono)
    localStorage.setItem("region", region)
    localStorage.setItem("permisos", JSON.stringify(permisos))
  }, [nombre, apellido, email, telefono, region, permisos])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setGuardadoExitoso(true)
    setTimeout(() => setGuardadoExitoso(false), 3000)
  }

  return (
    <div className="min-h-screen bg-blue-100 p-8 flex justify-center items-start">
      <style jsx global>{`
        @keyframes animate-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: animate-in 0.3s ease-out forwards;
        }
      `}</style>
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-6">
        {/* Left Column - Profile Info */}
        <div className="md:w-[400px] shrink-0">
          <div className="bg-[#222B60] text-white rounded-3xl p-8 flex flex-col items-center h-full">
            <h2 className="text-2xl font-semibold mb-1">Perfil de Administrador</h2>
            <p className="text-sm text-gray-300 mb-12">Gestiona tu información</p>

            <div className="w-48 h-48 mb-8">
              <img src="https://i.pinimg.com/736x/6a/f8/9f/6af89fb8f3586b160b5dfd921bac2a0f.jpg" alt="Profile picture" className="rounded-full w-full h-full object-cover" />
            </div>

            <h3 className="text-2xl font-medium">
              {nombre} {apellido}
            </h3>
            <p className="text-sm text-gray-300 mb-8">Administrador</p>

            <button className="w-full bg-[#2e3a8d] text-white py-3 px-4 rounded-lg hover:bg-[#252f75] transition-colors mt-auto">
              Cambiar Foto
            </button>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="flex-1">
          <div className="bg-white rounded-3xl p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-1">Configuracion del Perfil</h2>
              <p className="text-gray-500 text-sm">Actualiza la información de tu cuenta</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Apellido</label>
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Contraseña</label>
                <div className="flex gap-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    defaultValue="****"
                    className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-4 py-2 bg-[#1e2875] text-white rounded-lg hover:bg-[#162057] transition-colors whitespace-nowrap"
                  >
                    Mostrar Contraseña
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 bg-[#1e2875] text-white rounded-lg hover:bg-[#162057] transition-colors whitespace-nowrap"
                  >
                    Cambiar Contraseña
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Numero de Contacto</label>
                <input
                  type="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Región</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="mexico">Mexico</option>
                  {/* Añadir más opciones según sea necesario */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">Permisos de Administrador</label>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={permisos.gestionParticipantes}
                      onChange={(e) => setPermisos({ ...permisos, gestionParticipantes: e.target.checked })}
                      className="w-5 h-5 rounded border-gray-300 text-[#1e2875] mr-3"
                    />
                    <span className="text-gray-700">Gestión de participantes</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={permisos.configuracionSistema}
                      onChange={(e) => setPermisos({ ...permisos, configuracionSistema: e.target.checked })}
                      className="w-5 h-5 rounded border-gray-300 text-[#1e2875] mr-3"
                    />
                    <span className="text-gray-700">Configuración del sistema</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={permisos.rolesPermisos}
                      onChange={(e) => setPermisos({ ...permisos, rolesPermisos: e.target.checked })}
                      className="w-5 h-5 rounded border-gray-300 text-[#1e2875] mr-3"
                    />
                    <span className="text-gray-700">Roles y Permisos</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <div className="space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Eliminar Cuenta
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-[#1e2875] text-white rounded-lg hover:bg-[#162057] transition-colors"
                    onClick={() => setShowModal(true)}
                  >
                    Agregar un Admin
                  </button>
                </div>
                <div className="space-x-4">
                  <button
                    type="button"
                    className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#1e2875] text-white rounded-lg hover:bg-[#162057] transition-colors"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Modal for adding new admin */}
      {showModal && (
        <div className="fixed inset-0 bg-white/10 backdrop-blur-lg flex justify-center items-center p-4 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg p-6 w-full max-w-md transform transition-all duration-300 ease-in-out scale-90 opacity-0 animate-in">
            <h3 className="text-xl font-semibold mb-4">Agregar Nuevo Administrador</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nombre</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contraseña</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#1e2875] text-white rounded-md hover:bg-[#162057] transition-colors"
                >
                  Agregar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {guardadoExitoso && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Cambios guardados exitosamente
        </div>
      )}
    </div>
  )
}