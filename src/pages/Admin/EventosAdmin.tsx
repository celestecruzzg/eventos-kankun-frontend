"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { Users, LayoutDashboard, Calendar, BookMarked } from "lucide-react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import NavbarAdmin from "./navbarAdmin"

interface Evento {
  id: number
  nombre: string
  descripcion: string
  precio: string
  lugar: string
  fecha: string
  imagen: string
}

const EventosAdmin = () => {
  const navigate = useNavigate()
  const [eventos, setEventos] = useState<Evento[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [eventoActual, setEventoActual] = useState<Evento | null>(null)
  const [activeNav, setActiveNav] = useState("Eventos")
  const [nuevoEvento, setNuevoEvento] = useState<Evento>({
    id: 0,
    nombre: "",
    descripcion: "",
    precio: "",
    lugar: "",
    fecha: "",
    imagen: "",
  })

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/Dashboard" },
    { name: "Eventos", icon: Calendar, href: "/admin/eventos" },
    { name: "Participantes", icon: Users, href: "/admin/participantes" },
    { name: "Reservas y recursos", icon: BookMarked, href: "/admin/reservas" },
  ]

  const abrirModalEdicion = (evento: Evento) => {
    setEventoActual(evento)
    setEditModalOpen(true)
  }

  const handleAgregarEvento = () => {
    if (
      nuevoEvento.nombre &&
      nuevoEvento.descripcion &&
      nuevoEvento.precio &&
      nuevoEvento.lugar &&
      nuevoEvento.fecha &&
      nuevoEvento.imagen
    ) {
      setEventos([...eventos, { ...nuevoEvento, id: eventos.length + 1 }])
      setNuevoEvento({ id: 0, nombre: "", descripcion: "", precio: "", lugar: "", fecha: "", imagen: "" })
      setModalOpen(false)
    }
  }

  const handleEditarEvento = () => {
    if (eventoActual) {
      setEventos(eventos.map((evento) => (evento.id === eventoActual.id ? eventoActual : evento)))
      setEditModalOpen(false)
    }
  }

  const handleEliminarEvento = (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar este evento?")) {
      setEventos(eventos.filter((evento) => evento.id !== id))
    }
  }

  const handleEditarCampo = (campo: keyof Evento, valor: string) => {
    if (eventoActual) {
      setEventoActual({ ...eventoActual, [campo]: valor })
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
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

        <div className={`transition-all duration-300 ${editModalOpen ? "filter blur-sm" : ""}`}>
          <section>
            <div className="mb-2 flex justify-between items-center mt-6">
              <h3 className="text-xl font-semibold">Listado de eventos</h3>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 bg-[#5C72B4] text-white p-2 rounded hover:bg-[#222B60]"
              >
                <AiOutlinePlus size={20} /> <span className="hidden md:inline">Agregar evento</span>
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              {eventos.length === 0 ? (
                <p className="text-gray-500 text-center">No hay eventos creados</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {eventos.map((evento) => (
                    <div key={evento.id} className="border p-4 rounded-lg shadow relative">
                      <img
                        src={evento.imagen || "/placeholder.svg"}
                        alt="Evento"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <h4 className="font-bold">{evento.nombre}</h4>
                      <p className="text-sm">{evento.descripcion}</p>
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button onClick={() => abrirModalEdicion(evento)} className="text-gray-600 hover:text-gray-900">
                          <FiMoreVertical size={20} />
                        </button>
                        <button
                          onClick={() => handleEliminarEvento(evento.id)}
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-600"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>

        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>
              <input
                type="text"
                placeholder="Nombre"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })}
              />
              <input
                type="text"
                placeholder="Descripción"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })}
              />
              <input
                type="text"
                placeholder="Precio"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, precio: e.target.value })}
              />
              <input
                type="text"
                placeholder="Lugar"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, lugar: e.target.value })}
              />
              <input
                type="date"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })}
              />
              <input
                type="text"
                placeholder="URL Imagen"
                className="border p-2 w-full mb-2 rounded"
                onChange={(e) => setNuevoEvento({ ...nuevoEvento, imagen: e.target.value })}
              />
              <div className="flex justify-end mt-4">
                <button onClick={() => setModalOpen(false)} className="bg-gray-400 text-white px-4 py-2 rounded mr-2">
                  Cancelar
                </button>
                <button onClick={handleAgregarEvento} className="bg-blue-600 text-white px-4 py-2 rounded">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}

        {editModalOpen && eventoActual && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Editar Evento</h2>
              <input
                type="text"
                placeholder="Nombre"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.nombre}
                onChange={(e) => handleEditarCampo("nombre", e.target.value)}
              />
              <input
                type="text"
                placeholder="Descripción"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.descripcion}
                onChange={(e) => handleEditarCampo("descripcion", e.target.value)}
              />
              <input
                type="text"
                placeholder="Precio"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.precio}
                onChange={(e) => handleEditarCampo("precio", e.target.value)}
              />
              <input
                type="text"
                placeholder="Lugar"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.lugar}
                onChange={(e) => handleEditarCampo("lugar", e.target.value)}
              />
              <input
                type="date"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.fecha}
                onChange={(e) => handleEditarCampo("fecha", e.target.value)}
              />
              <input
                type="text"
                placeholder="URL Imagen"
                className="border p-2 w-full mb-2 rounded"
                value={eventoActual.imagen}
                onChange={(e) => handleEditarCampo("imagen", e.target.value)}
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                >
                  Cancelar
                </button>
                <button onClick={handleEditarEvento} className="bg-blue-600 text-white px-4 py-2 rounded">
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default EventosAdmin

