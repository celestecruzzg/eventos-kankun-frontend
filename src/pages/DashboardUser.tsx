"use client"
import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { BookMarked, Calendar, CheckCircle, LayoutDashboard, Users } from "lucide-react"
import NavbarUser from "./navbarUser"


export default function DashboardUser() {
   const [activeNav, setActiveNav] = useState("Dashboard")

   const navItems = [
      { name: "Dashboard", icon: LayoutDashboard , href:"/Dashboard"},
      { name: "Eventos", icon: Calendar ,href:"/eventos"},
      { name: "Participantes", icon: Users, href:"/participantes" },
      { name: "Reservas y recursos", icon: BookMarked , href:"/reservas"},
    ]


    return (
      <div className="flex min-h-screen bg-[#9BB7EB]">
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
            <h3 className="text-white text-3xl font-bold mb-6">Bienvenida Jill</h3>
    
            {/* Contenedor principal de columnas */}
            <div className="flex gap-8">
              {/* Columna izquierda */}
              <div className="space-y-8 w-80">

                {/* Profile Card */}
                <div className="bg-white rounded-2xl p-6 shadow">
                  <div className="text-center">
                    <div className="mb-4">
                      <img
                        src="https://i.pinimg.com/736x/e2/11/06/e2110689ea2dac7f5ea3e15a09c55743.jpg"
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                      />
                    </div>
                    <h1 className="text-[#1a2b4a] mb-2">Jill Valentine</h1>
                    <span className="text-gray-500 text-sm">Username</span>
                  </div>
    
                  <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-black text-sm">Nombre</label>
                      <div className="bg-[#f5f7fa] px-3 py-2 rounded-lg text-[#1a2b4a]">Jill Valentine Williams</div>
                    </div>
                    <div className="flex justify-between items-center">
                      <label className="text-black text-sm">Correo</label>
                      <div className="bg-[#f5f7fa] px-3 py-2 rounded-lg text-[#1a2b4a] mr-8">Jillw@gmail.com</div>
                    </div>
                  </div>
    
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                      <BookMarked className="w-12 h-12 text-[#569fd7]" />
                      <div>
                        <h3 className="text-black mb-1 font-medium">15</h3>
                        <small className="text-gray-800 text-xs font-medium">Eventos Guardados</small>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-100">
                      <CheckCircle className="w-8 h-8 text-[#74C0FC]" />
                      <div>
                        <h3 className="text-black mb-1 font-medium">72.5%</h3>
                        <small className="text-gray-800 text-xs font-medium">Eventos Asistidos</small>
                      </div>
                    </div>
                  </div>
                </div>
    
                {/* Help Section */}
                <div className="rounded-2xl p-6">
                  <h2 className="text-[#1a2b4a] mb-2">Necesitas Ayuda?</h2>
                  <p className="text-gray-600 mb-6">
                    Accede a todos tus eventos <br /> para no perderte <br />
                    ninguno!
                  </p>
                  <Link to="/eventos">
                  <button className="flex items-center gap-2 bg-[#1a2b4a] text-white px-6 py-3 rounded-full hover:bg-[#273859] transition-colors">
                    Mis Eventos
                  </button>
                  </Link>
                  
                </div>
              </div>
    
              {/* Columna derecha */}
              <div className="flex-1">
                {/* Activity Chart */}
                <div className="bg-white rounded-2xl p-8 shadow h-[410px] mb-8">
                  <h2 className="text-[#1a2b4a] mb-6 font-bold">
                    Actividad de <br /> Eventos
                  </h2>
                  <div className="row">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#4caf50]"></span>
                      <span>Asistidos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#f44336]"></span>
                      <span>Cancelados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ff9800]"></span>
                      <span>Pospuestos</span>
                    </div>
                  </div>
                  <div className="w-[200px] h-[200px] mx-auto ">
                    <div className="w-full h-full rounded-full bg-[conic-gradient(#4caf50_0%_50%,#f44336_50%_65%,#ff9800_65%_100%)]"></div>
                  </div>
                </div>
    
                {/* Upcoming Events */}
                <div className="bg-white rounded-2xl p-4 shadow">
                  <h2 className="text-[#1a2b4a] font-bold mt-3">EVENTOS PROXIMOS</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 p-4 rounded-lg hover:bg-[#f5f7fa] transition-colors">
                      <div className="font-bold text-[#1a2b4a]">15:00</div>
                      <div className="flex items-center gap-4">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTgWd1PgllAdPLgHQtSGKypvIFObCT.png"
                          alt="Event"
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-[#1a2b4a] mb-1">Pedagogique FLE</h3>
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path
                                fill="#e31616"
                                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8h176v176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                              />
                            </svg>
                            La Salle Cancun
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-gray-500 text-sm">Febrero 22</span>
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-[#e8f5e9] text-[#4caf50] mt-2">
                          Confirmado
                        </span>
                      </div>
                    </div>
    
                    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-6 p-4 rounded-lg hover:bg-[#f5f7fa] transition-colors">
                      <div className="font-bold text-[#1a2b4a]">20:00</div>
                      <div className="flex items-center gap-4">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTgWd1PgllAdPLgHQtSGKypvIFObCT.png"
                          alt="Event"
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="text-[#1a2b4a] mb-1">Flygirl Party</h3>
                          <p className="text-gray-500 text-sm flex items-center gap-1">
                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path
                                fill="#e31616"
                                d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8h176v176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"
                              />
                            </svg>
                            Teatro Xbalamqué
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="block text-gray-500 text-sm">Febrero 24</span>
                        <span className="inline-block px-2 py-1 rounded-full text-xs bg-[#fff3e0] text-[#ff9800] mt-2">
                          Pendiente
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

