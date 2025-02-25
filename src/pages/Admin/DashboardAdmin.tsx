"use client"

import { useState } from "react"
import NavbarAdmin from "./navbarAdmin"
import { ChevronDown, ChevronUp, BookOpen, Users, PieChart, LayoutDashboard, Calendar, BookMarked } from "lucide-react"
import logo from "../../assets/logo.png"
import {  Link } from "react-router-dom"

export function Dashboardadmin() {
  const [activeNav, setActiveNav] = useState("Dashboard")

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard , href:"/admin/Dashboard"},
    { name: "Eventos", icon: Calendar ,href:"/admin/eventos"},
    { name: "Participantes", icon: Users, href:"/FALTA LINK!!!" },
    { name: "Reservas y recursos", icon: BookMarked , href:"/admin/reservas"},
  ]

  const stats = [
    { title: "Total de Eventos", value: 15, change: 2, icon: BookOpen },
    { title: "Participantes Inscritos", value: 573, change: 201, icon: Users },
    { title: "Tasa de Ocupación", value: "85%", change: 8, icon: PieChart },
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1a2b4a] text-white">
        <div className="p-6">
          <img src={logo} alt="Logo" className="h-18 mb-8" />
        </div>
        <nav className="space-y-2 ml-2 mr-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center gap-4 px-6 py-3 text-sm font-medium  ${
                activeNav === item.href
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

      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 ml-8 mr-8 mt-6" >
        <NavbarAdmin />

        <div className="container mx-auto px-6 py-8">
          <h3 className="text-gray-700 text-3xl font-bold mb-6">Bienvenida Jill</h3>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600 font-medium">{stat.title}</span>
                  <stat.icon className="w-6 h-6 text-[#1a2b4a]" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-[#1a2b4a] mb-2">{stat.value}</h2>
                  <div className="flex items-center">
                    <ChevronUp className="w-4 h-4 text-green-500 mr-1" />
                    <small className="text-green-500 font-medium">
                      {stat.change} {stat.title.includes("Tasa") ? "%" : ""} desde el último mes
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6 text-[#1a2b4a]">Actividad de Eventos</h3>
              <div className="flex justify-around mb-6">
                {["Asistidos", "Cancelados", "Pospuestos"].map((status, index) => (
                  <div key={index} className="flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-2 ${["bg-green-500", "bg-red-500", "bg-orange-500"][index]}`}
                    ></span>
                    <span className="text-sm text-gray-600">{status}</span>
                  </div>
                ))}
              </div>
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(#4caf50_0%_50%,#f44336_50%_65%,#ff9800_65%_100%)]"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-[#1a2b4a]">Eventos Recientes</h3>
                <small className="text-gray-600">12 eventos este mes</small>
              </div>
              <div className="space-y-4">
                {["Conferencia Tech", "Taller de Innovación", "Feria de Empleo", "Expo Turismo"].map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="w-10 h-10 bg-[#1a2b4a] text-white rounded-full flex items-center justify-center font-bold">
                      {["CT", "TI", "FE", "ET"][index]}
                    </span>
                    <div>
                      <h4 className="font-bold text-[#1a2b4a]">{event}</h4>
                      <small className="text-gray-600">{[200, 50, 300, 500][index]} participantes</small>
                    </div>
                    <ChevronDown className="w-5 h-5 text-gray-400 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

