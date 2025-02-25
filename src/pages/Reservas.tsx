"use client"

import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { BookMarked, Calendar, LayoutDashboard, Users } from "lucide-react"
import NavbarUser from "./navbarUser"

interface Reserva {
  id: number
  nombre: string
  descripcion: string
}

const Reservas = () => {
  const [activeNav, setActiveNav] = useState("Reservas y recursos")
  const [reservas] = useState<Reserva[]>([
    { id: 1, nombre: "Reserva 1", descripcion: "Descripción de la reserva 1" },
    { id: 2, nombre: "Reserva 2", descripcion: "Descripción de la reserva 2" },
    { id: 3, nombre: "Reserva 3", descripcion: "Descripción de la reserva 3" },
    { id: 4, nombre: "Reserva 4", descripcion: "Descripción de la reserva 4" },
  ])

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/Dashboard" },
    { name: "Eventos", icon: Calendar, href: "/eventos" },
    { name: "Participantes", icon: Users, href: "/participantes" },
    { name: "Reservas y recursos", icon: BookMarked, href: "/reservas" },
  ]

  return (
    <div className="flex min-h-screen bg-[#9BB7EB]">
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
              className={`flex items-center gap-4 px-6 py-3 text-sm font-medium ${
                activeNav === item.name
                  ? "bg-[#5c72b4b1] text-white rounded-lg"
                  : "text-gray-300 hover:bg-[#5c72b4b1] hover:text-white rounded-lg"
              }`}
              onClick={() => setActiveNav(item.name)}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-x-hidden overflow-y-auto ml-8 mr-8 mt-6">
        <NavbarUser />
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-white text-3xl font-bold mb-6">Reservas y recursos</h3>

          <section>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {reservas.length === 0 ? (
                <p className="text-gray-500 text-center">No hay reservas creadas</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reservas.map((reserva) => (
                    <div key={reserva.id} className="border p-4 rounded-lg shadow relative">
                      <h4 className="font-bold">{reserva.nombre}</h4>
                      <p className="text-sm">{reserva.descripcion}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Reservas

