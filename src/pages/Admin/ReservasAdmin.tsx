"use client"

import { useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { Users, LayoutDashboard, Calendar, BookMarked } from "lucide-react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import NavbarAdmin from "./navbarAdmin"

interface Reserva {
  id: number
  nombre: string
  descripcion: string
}

const ReservasAdmin = () => {
  const [reservas, setReservas] = useState<Reserva[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Reservas y recursos")
  const [nuevaReserva, setNuevaReserva] = useState<Reserva>({
    id: 0,
    nombre: "",
    descripcion: "",
  })

  const navigate = useNavigate()

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/Dashboard" },
    { name: "Eventos", icon: Calendar, href: "/admin/eventos" },
    { name: "Participantes", icon: Users, href: "/admin/participantes" },
    { name: "Reservas y recursos", icon: BookMarked, href: "/admin/reservas" },
  ]

  const handleAgregarReserva = () => {
    if (nuevaReserva.nombre && nuevaReserva.descripcion) {
      setReservas([...reservas, { ...nuevaReserva, id: reservas.length + 1 }])
      setNuevaReserva({ id: 0, nombre: "", descripcion: "" })
      setModalOpen(false)
    }
  }

  const handleEliminarReserva = (id: number) => {
    setReservas(reservas.filter((reserva) => reserva.id !== id))
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2b4a] text-white">
        <div className="p-6">
          <img src={logo || "/placeholder.svg"} alt="Logo" className="h-18 mb-8" />
        </div>
        <nav className="space-y-2 ml-2 mr-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-4 px-6 py-3 text-sm font-medium  ${
                activeNav === item.name
                  ? "bg-[#5c72b4b1] text-white rounded-lg "
                  : "text-gray-300 hover:bg-[#5c72b4b1] hover:text-white rounded-lg "
              }`}
              onClick={() => setActiveNav(item.name)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 ml-8 mr-8 mt-6">
      <NavbarAdmin />


        <section>
        <div className="mb-2 flex justify-between items-center mt-6">
            <h3 className="text-xl font-semibold">Listado de reservas</h3>
            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center gap-1 bg-[#5C72B4] text-white p-2 rounded hover:bg-[#222B60]"
            >
              <AiOutlinePlus size={20} /> <span className="hidden md:inline">Agregar reserva</span>
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {reservas.length === 0 ? (
              <p className="text-gray-500 text-center">No hay reservas creadas</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {reservas.map((reserva) => (
                  <div key={reserva.id} className="border p-4 rounded-lg shadow relative">
                    <h4 className="font-bold">{reserva.nombre}</h4>
                    <p className="text-sm mb-2">{reserva.descripcion}</p>
                    <button
                      onClick={() => handleEliminarReserva(reserva.id)}
                      className="mt-2 bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Agregar Reserva</h2>
            <input
              type="text"
              placeholder="Nombre"
              className="border p-2 w-full mb-2 rounded"
              onChange={(e) => setNuevaReserva({ ...nuevaReserva, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              className="border p-2 w-full mb-2 rounded"
              onChange={(e) => setNuevaReserva({ ...nuevaReserva, descripcion: e.target.value })}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAgregarReserva}
                className="bg-green-500 text-white p-2 rounded mr-2 hover:bg-green-600"
              >
                Guardar
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReservasAdmin

