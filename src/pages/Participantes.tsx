"use client"

import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { BookMarked, Calendar, LayoutDashboard, Users, ChevronLeft, ChevronRight } from "lucide-react"
import NavbarUser from "./navbarUser"

interface Participante {
  id: number
  nombre: string
  rol: string
  evento: string
}

const Participantes = () => {
  const [activeNav, setActiveNav] = useState("Participantes")
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [participantes] = useState<Participante[]>([
    { id: 1, nombre: "Juan Pérez", rol: "Admin", evento: "Convención de juegos" },
    { id: 2, nombre: "María García", rol: "Participante", evento: "Feria Gastronomía" },
    { id: 3, nombre: "Carlos Rodríguez", rol: "Host", evento: "Trabajos Jardín UT" },
    { id: 4, nombre: "Ana Martínez", rol: "Participante", evento: "Trabajos Jardín UT" },
  ])

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/Dashboard" },
    { name: "Eventos", icon: Calendar, href: "/eventos" },
    { name: "Participantes", icon: Users, href: "/participantes" },
    { name: "Reservas y recursos", icon: BookMarked, href: "/reservas" },
  ]

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-[#9BB7EB]">
      {/* Sidebar con animación */}
      <aside
        className={`transition-all duration-300 ease-in-out ${
          sidebarOpen ? "w-64" : "w-20"
        } bg-[#1a2b4a] text-white relative`}
      >
        <div className={`p-6 ${sidebarOpen ? "" : "flex justify-center"}`}>
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className={`transition-all duration-300 ${sidebarOpen ? "h-18 mb-8" : "h-12 w-12 mb-4"}`}
          />
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
              } ${!sidebarOpen && "justify-center px-2"}`}
              onClick={() => setActiveNav(item.name)}
            >
              <item.icon className="w-5 h-5" />
              {sidebarOpen && <span>{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Botón para abrir/cerrar el sidebar */}
        <button
          onClick={toggleSidebar}
          className="absolute top-1/2 -right-3 bg-[#1a2b4a] text-white p-1 rounded-full shadow-md hover:bg-[#5c72b4b1] transition-colors"
          aria-label={sidebarOpen ? "Cerrar sidebar" : "Abrir sidebar"}
        >
          {sidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </aside>

      <main
        className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ${
          sidebarOpen ? "ml-0" : "ml-0"
        }`}
      >
        <div className="mx-8 mt-6">
          <NavbarUser />
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-white text-3xl font-bold mb-6">Participantes</h3>

            <section>
              <div className="bg-white p-6 rounded-lg shadow-md">
                {participantes.length === 0 ? (
                  <p className="text-gray-500 text-center">No hay participantes registrados</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {participantes.map((participante) => (
                      <div key={participante.id} className="border p-4 rounded-lg shadow relative">
                        <h4 className="font-bold">{participante.nombre}</h4>
                        <p className="text-sm">Rol: {participante.rol}</p>
                        <p className="text-sm">Evento: {participante.evento}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Participantes

