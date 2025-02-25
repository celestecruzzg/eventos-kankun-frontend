"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { Eye, EyeOff, Check } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Dialog } from "../components/Dialog"

interface UserData {
  nombre?: string
  apellidoPaterno?: string
  apellidoMaterno?: string
  email: string
  password: string
}

export default function Login() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  useEffect(() => {
    // Verificar si hay una sesión activa
    const userData = localStorage.getItem("userData")
    if (userData) {
      navigate("/Dashboard")
    }
  }, [navigate])

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterData({ ...registerData, [name]: value })
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    const user = storedUsers.find((u: UserData) => u.email === loginData.email && u.password === loginData.password)

    if (user) {
      localStorage.setItem("userData", JSON.stringify(user))
      navigate("/Dashboard")
    } else {
      setError("Credenciales incorrectas")
    }
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (registerData.password !== registerData.confirmPassword) {
      setError("Las contraseñas no coinciden")
      return
    }

    const storedUsers = JSON.parse(localStorage.getItem("users") || "[]")
    const userExists = storedUsers.some((user: UserData) => user.email === registerData.email)

    if (userExists) {
      setError("El correo electrónico ya está registrado")
      return
    }

    const newUser = {
      nombre: registerData.nombre,
      apellidoPaterno: registerData.apellidoPaterno,
      apellidoMaterno: registerData.apellidoMaterno,
      email: registerData.email,
      password: registerData.password,
    }

    storedUsers.push(newUser)
    localStorage.setItem("users", JSON.stringify(storedUsers))
    setShowSuccessModal(true)

    // Limpiar el formulario
    setRegisterData({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row transform transition-all duration-300">
        {/* Columna izquierda - Formulario */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
          <div className="max-w-md mx-auto">
            {isLogin ? (
              <div className="space-y-6 animate-in">
                <div className="space-y-2 text-center lg:text-left">
                  <h1 className="text-3xl font-bold text-gray-900">Iniciar sesión</h1>
                  <p className="text-gray-600">Ingresa tus credenciales para acceder</p>
                </div>
                <form onSubmit={handleLoginSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        value={loginData.email}
                        onChange={handleLoginChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                      </label>
                      <div className="relative">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          value={loginData.password}
                          onChange={handleLoginChange}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Iniciar sesión
                  </button>
                </form>
              </div>
            ) : (
              <div className="space-y-6 animate-in">
                <div className="space-y-2 text-center lg:text-left">
                  <h1 className="text-3xl font-bold text-gray-900">Registrarse</h1>
                  <p className="text-gray-600">Crea una nueva cuenta</p>
                </div>
                <form onSubmit={handleRegisterSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          value={registerData.nombre}
                          onChange={handleRegisterChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-700 mb-1">
                          Apellido Paterno
                        </label>
                        <input
                          id="apellidoPaterno"
                          name="apellidoPaterno"
                          type="text"
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          value={registerData.apellidoPaterno}
                          onChange={handleRegisterChange}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-700 mb-1">
                        Apellido Materno
                      </label>
                      <input
                        id="apellidoMaterno"
                        name="apellidoMaterno"
                        type="text"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        value={registerData.apellidoMaterno}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo Electrónico
                      </label>
                      <input
                        id="register-email"
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        value={registerData.email}
                        onChange={handleRegisterChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                      </label>
                      <div className="relative">
                        <input
                          id="register-password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          required
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                          value={registerData.password}
                          onChange={handleRegisterChange}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </button>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirmar Contraseña
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                        value={registerData.confirmPassword}
                        onChange={handleRegisterChange}
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Registrarse
                  </button>
                </form>
              </div>
            )}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-blue-600 hover:text-blue-700 hover:underline focus:outline-none transition-colors"
                >
                  {isLogin ? "Regístrate" : "Inicia sesión"}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha - Imagen */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={new URL("../assets/images/evento-kankun.jpg", import.meta.url).href || "/placeholder.svg"}
            alt="Eventos Kankun Venue"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center transform transition-all duration-300 hover:scale-105">
              <h2 className="text-4xl font-bold text-white mb-2">Eventos</h2>
              <h1 className="text-6xl font-bold text-white">KANKUN</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de registro exitoso */}
      <Dialog open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-6 h-6 text-green-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">¡Registro Exitoso!</h2>
          <p className="text-gray-500">Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.</p>
          <button
            onClick={() => {
              setShowSuccessModal(false)
              setIsLogin(true)
            }}
            className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Iniciar Sesión
          </button>
        </div>
      </Dialog>
    </div>
  )
}