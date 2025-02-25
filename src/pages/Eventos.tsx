"use client"

import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { BookMarked, Calendar, LayoutDashboard, Users } from "lucide-react"
import NavbarUser from "./navbarUser"

interface Evento {
  id: number
  nombre: string
  fecha: string
  lugar: string
  imagen: string
}

const Eventos = () => {
  const [activeNav, setActiveNav] = useState("Eventos")
  const [eventos] = useState<Evento[]>([
    {
      id: 1,
      nombre: "Feria de Gastronomía",
      fecha: "15 de Mayo, 2025",
      lugar: "Edificio G y domo",
      imagen:
        "https://images.unsplash.com/photo-1571989569145-abd6fa9d6117?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      nombre: "Trabajos Jardín UT",
      fecha: "22-24 de Septiembre, 2024",
      lugar: "Edificio H",
      imagen:
        "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      nombre: "Convención de Juegos",
      fecha: "5 de Marzo, 2025",
      lugar: "Edificios H y J",
      imagen:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
          <h3 className="text-white text-3xl font-bold mb-6">Eventos</h3>

          <section>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {eventos.length === 0 ? (
                <p className="text-gray-500 text-center">No hay eventos creados</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventos.map((evento) => (
                    <div key={evento.id} className="border p-4 rounded-lg shadow relative">
                      <img
                        src={evento.imagen || "/placeholder.svg"}
                        alt={evento.nombre}
                        className="w-full h-48 object-cover rounded-t-lg mb-4"
                      />
                      <h4 className="font-bold text-lg mb-2">{evento.nombre}</h4>
                      <p className="text-sm mb-1">
                        <strong>Fecha:</strong> {evento.fecha}
                      </p>
                      <p className="text-sm">
                        <strong>Lugar:</strong> {evento.lugar}
                      </p>
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

export default Eventos

