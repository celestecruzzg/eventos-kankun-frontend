"use client"

import { useState, useEffect } from "react"
import { FiMoreVertical } from "react-icons/fi"
import { AiOutlinePlus } from "react-icons/ai"
import { Users, LayoutDashboard, Calendar, BookMarked } from "lucide-react"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import NavbarAdmin from "./navbarAdmin"

interface Participante {
  id: number
  nombre: string
  rol: string[]
  evento: string
  imagen: string
}

const ParticipantesAdmin = () => {
  const [participantes, setParticipantes] = useState<Participante[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [editModalOpen, setEditModalOpen] = useState(false)
  const [participanteActual, setParticipanteActual] = useState<Participante | null>(null)

  const rolesDisponibles = ["Participante", "Admin", "Host"]

  // Cargar participantes desde localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem("participantes")
    if (data) {
      setParticipantes(JSON.parse(data))
    }
  }, [])

  // Guardar participantes en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("participantes", JSON.stringify(participantes))
  }, [participantes])

  const navItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin/Dashboard" },
    { name: "Eventos", icon: Calendar, href: "/admin/eventos" },
    { name: "Participantes", icon: Users, href: "/admin/participantes" },
    { name: "Reservas y recursos", icon: BookMarked, href: "/admin/reservas" },
  ]

  const abrirModalEdicion = (participante: Participante) => {
    setParticipanteActual(participante)
    setEditModalOpen(true)
  }

  const [nuevoParticipante, setNuevoParticipante] = useState<Participante>({
    id: 0,
    nombre: "",
    rol: [],
    evento: "",
    imagen: "",
  })

  const handleAgregarParticipante = () => {
    if (
      nuevoParticipante.nombre &&
      nuevoParticipante.rol.length > 0 &&
      nuevoParticipante.evento &&
      nuevoParticipante.imagen
    ) {
      const nuevoID = participantes.length > 0 ? participantes[participantes.length - 1].id + 1 : 1
      const nuevoLista = [...participantes, { ...nuevoParticipante, id: nuevoID }]
      setParticipantes(nuevoLista)
      setNuevoParticipante({ id: 0, nombre: "", rol: [], evento: "", imagen: "" })
      setModalOpen(false)
    }
  }

  const handleEditarParticipante = () => {
    if (participanteActual) {
      const nuevosParticipantes = participantes.map((p) => (p.id === participanteActual.id ? participanteActual : p))
      setParticipantes(nuevosParticipantes)
      setEditModalOpen(false)
    }
  }

  const handleEliminarParticipante = (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar este participante?")) {
      const nuevaLista = participantes.filter((p) => p.id !== id)
      setParticipantes(nuevaLista)
    }
  }

  const handleEditarCampo = (campo: keyof Participante, valor: string | string[]) => {
    if (participanteActual) {
      setParticipanteActual({ ...participanteActual, [campo]: valor })
    }
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
              className={`flex items-center gap-4 px-6 py-3 text-sm font-medium ${
                item.name === "Participantes"
                  ? "bg-[#5c72b4b1] text-white rounded-lg"
                  : "text-gray-300 hover:bg-[#5c72b4b1] hover:text-white rounded-lg"
              }`}
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
              <h3 className="text-xl font-semibold">Listado de Participantes</h3>
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-1 bg-[#5C72B4] text-white p-2 rounded hover:bg-[#222B60]"
              >
                <AiOutlinePlus size={20} /> <span className="hidden md:inline">Agregar Participante</span>
              </button>
            </div>
            {modalOpen && (
              <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                  <h2 className="text-lg font-semibold mb-4">Agregar Participante</h2>

                  <label className="block mb-2 text-sm font-medium">Nombre</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={nuevoParticipante.nombre}
                    onChange={(e) => setNuevoParticipante({ ...nuevoParticipante, nombre: e.target.value })}
                  />

                  <label className="block mt-4 mb-2 text-sm font-medium">Evento</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={nuevoParticipante.evento}
                    onChange={(e) => setNuevoParticipante({ ...nuevoParticipante, evento: e.target.value })}
                  />

                  <label className="block mt-4 mb-2 text-sm font-medium">Roles</label>
                  <select
                    multiple
                    className="w-full border p-2 rounded"
                    onChange={(e) => {
                      const seleccionados = Array.from(e.target.selectedOptions, (option) => option.value)
                      setNuevoParticipante({ ...nuevoParticipante, rol: seleccionados })
                    }}
                  >
                    {rolesDisponibles.map((rol) => (
                      <option key={rol} value={rol}>
                        {rol}
                      </option>
                    ))}
                  </select>

                  <label className="block mt-4 mb-2 text-sm font-medium">Imagen (URL)</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={nuevoParticipante.imagen}
                    onChange={(e) => setNuevoParticipante({ ...nuevoParticipante, imagen: e.target.value })}
                  />

                  <div className="flex justify-end mt-6">
                    <button
                      onClick={() => setModalOpen(false)}
                      className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                    >
                      Cancelar
                    </button>
                    <button onClick={handleAgregarParticipante} className="bg-blue-600 text-white px-4 py-2 rounded">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="bg-white p-6 rounded-lg shadow-md">
              {participantes.length === 0 ? (
                <p className="text-gray-500 text-center">No hay participantes creados</p>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {participantes.map((p) => (
                    <div key={p.id} className="border p-4 rounded-lg shadow relative">
                      <img
                        src={p.imagen || "/placeholder.svg"}
                        alt="Participante"
                        className="w-full h-32 object-cover rounded mb-2"
                      />
                      <h4 className="font-bold">{p.nombre}</h4>
                      <p className="text-sm">Roles: {p.rol.join(", ")}</p>
                      <p className="text-sm">Evento: {p.evento}</p>
                      <div className="absolute top-2 right-2 flex gap-2">
                        <button onClick={() => abrirModalEdicion(p)} className="text-gray-600 hover:text-gray-900">
                          <FiMoreVertical size={20} />
                        </button>
                        <button
                          onClick={() => handleEliminarParticipante(p.id)}
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

        {editModalOpen && participanteActual && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-lg font-semibold mb-4">Editar Participante</h2>

              <label className="block mb-2 text-sm font-medium">Nombre</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={participanteActual.nombre}
                onChange={(e) => handleEditarCampo("nombre", e.target.value)}
              />

              <label className="block mt-4 mb-2 text-sm font-medium">Evento</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={participanteActual.evento}
                onChange={(e) => handleEditarCampo("evento", e.target.value)}
              />

              <label className="block mt-4 mb-2 text-sm font-medium">Roles</label>
              <select
                multiple
                className="w-full border p-2 rounded"
                value={participanteActual.rol}
                onChange={(e) => {
                  const seleccionados = Array.from(e.target.selectedOptions, (option) => option.value)
                  handleEditarCampo("rol", seleccionados)
                }}
              >
                {rolesDisponibles.map((rol) => (
                  <option key={rol} value={rol}>
                    {rol}
                  </option>
                ))}
              </select>

              <label className="block mt-4 mb-2 text-sm font-medium">Imagen (URL)</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={participanteActual.imagen}
                onChange={(e) => handleEditarCampo("imagen", e.target.value)}
              />

              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setEditModalOpen(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                >
                  Cancelar
                </button>
                <button onClick={handleEditarParticipante} className="bg-blue-600 text-white px-4 py-2 rounded">
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

export default ParticipantesAdmin

