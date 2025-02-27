import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaSpinner } from "react-icons/fa" // Importa el spinner
import logo from "../assets/logo.png"

export function Header() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    surnameP: "",
    surnameM: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({
    name: "",
    surnameP: "",
    surnameM: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false)
  const [loading, setLoading] = useState(false) // Estado de carga

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "unset"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [showModal])

  const handleRegisterClick = () => setShowModal(true)
  const handleCloseModal = () => {
    setShowModal(false)
    setFormData({
      name: "",
      surnameP: "",
      surnameM: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setErrors({
      name: "",
      surnameP: "",
      surnameM: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: "" })
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      surnameP: "",
      surnameM: "",
      email: "",
      password: "",
      confirmPassword: "",
    }

    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido."
      isValid = false
    }
    if (!formData.surnameP.trim()) {
      newErrors.surnameP = "El apellido paterno es requerido."
      isValid = false
    }
    if (!formData.surnameM.trim()) {
      newErrors.surnameM = "El apellido materno es requerido."
      isValid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido."
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El correo electrónico no es válido."
      isValid = false
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es requerida."
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres."
      isValid = false
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirma tu contraseña."
      isValid = false
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden."
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true) // Inicia la carga

    try {
      const response = await fetch("http://localhost:5223/api/Auth/register-participant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Nombre: formData.name,
          ApPaterno: formData.surnameP,
          ApMaterno: formData.surnameM,
          Email: formData.email,
          Contrasena: formData.password,
        }),
      })

      const result = await response.json()

      if (response.ok) {
        toast.success("Registro exitoso. Verifica tu correo.")
        handleCloseModal()
      } else {
        toast.error(result.Message || "Correo ya registrado, verifica los datos.")
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error)
      toast.error("Error al conectar con el servidor.")
    } finally {
      setLoading(false) // Termina la carga
    }
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
          ${showModal ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Overlay con blur */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm
            ${showModal ? "opacity-100" : "opacity-0"}`}
          onClick={handleCloseModal}
        />

        {/* Modal Content */}
        <div
          className={`relative w-full max-w-sm mx-4 bg-white rounded-xl shadow-2xl
            transform transition-all duration-300 ease-out
            ${showModal ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"}`}
        >
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

          {/* Form Content */}
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
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="text"
                name="surnameP"
                value={formData.surnameP}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Apellido Paterno"
              />
              {errors.surnameP && <p className="text-red-500 text-sm">{errors.surnameP}</p>}

              <input
                type="text"
                name="surnameM"
                value={formData.surnameM}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Apellido Materno"
              />
              {errors.surnameM && <p className="text-red-500 text-sm">{errors.surnameM}</p>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2.5 border border-gray-300 rounded-lg"
                placeholder="Correo Electrónico"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg"
                  placeholder="Contraseña"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <div className="relative">
                <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg"
                  placeholder="Confirmar Contraseña"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                >
                  {confirmPasswordVisible ? (
                    <AiOutlineEyeInvisible size={24} />
                  ) : (
                    <AiOutlineEye size={24} />
                  )}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white rounded-lg py-2 mt-4 hover:bg-indigo-700 transition cursor-pointer"
                disabled={loading} // Deshabilitar el botón durante la carga
              >
                {loading ? (
                  <FaSpinner className="animate-spin mx-auto" size={20} />
                ) : (
                  "Registrarse"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
