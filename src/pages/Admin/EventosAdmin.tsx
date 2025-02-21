import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiUser, FiGrid, FiCalendar, FiUsers, FiBook, FiMoreVertical } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

interface Evento {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  lugar: string;
  fecha: string;
  imagen: string;
}

const EventosAdmin = () => {
  const navigate = useNavigate();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [eventoActual, setEventoActual] = useState<Evento | null>(null);
  const [nuevoEvento, setNuevoEvento] = useState<Evento>({
    id: 0,
    nombre: "",
    descripcion: "",
    precio: "",
    lugar: "",
    fecha: "",
    imagen: "",
  });

  const abrirModalEdicion = (evento: Evento) => {
    setEventoActual(evento);
    setEditModalOpen(true);
  };

  const handleAgregarEvento = () => {
    if (nuevoEvento.nombre && nuevoEvento.descripcion && nuevoEvento.precio && nuevoEvento.lugar && nuevoEvento.fecha && nuevoEvento.imagen) {
      setEventos([...eventos, { ...nuevoEvento, id: eventos.length + 1 }]);
      setNuevoEvento({ id: 0, nombre: "", descripcion: "", precio: "", lugar: "", fecha: "", imagen: "" });
      setModalOpen(false);
    }
  };

  const handleEditarEvento = () => {
    if (eventoActual) {
      setEventos(eventos.map(evento => (evento.id === eventoActual.id ? eventoActual : evento)));
      setEditModalOpen(false);
    }
  };

  const handleEliminarEvento = (id: number) => {
    setEventos(eventos.filter(evento => evento.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#9BB7EB]">
      <aside className="w-64 bg-[#222B60] text-white flex flex-col p-5">
        <div className="flex items-center gap-10 mb-15">
          <FiGrid size={24} />
          <h1 className="text-lg font-bold">EVENTOS KANKUN</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => navigate("/admin/dashboard")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiGrid size={20} /> Dashboard
          </button>
          <button onClick={() => navigate("/admin/eventos")} className="flex items-center gap-3 bg-[#5C72B4] p-3 rounded">
            <FiCalendar size={20} /> Eventos
          </button>
          <button onClick={() => navigate("/admin/participantes")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiUsers size={20} /> Participantes
          </button>
          <button onClick={() => navigate("/admin/reservas")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiBook size={20} /> Reservas y recursos
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6">
        <header className="flex justify-between items-center bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-lg font-bold">Eventos</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <FiBell size={20} />
            </button>
            <div className="flex items-center gap-2">
              <FiUser size={20} />
              <span>Admin</span>
            </div>
          </div>
        </header>

        <div className="mb-4 flex justify-end">
          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-[#5C72B4] text-white p-3 rounded hover:bg-[#222B60]"
          >
            <AiOutlinePlus size={20} /> Agregar evento
          </button>
        </div>

        <section>
          <h3 className="text-xl font-semibold mb-4">Listado de eventos</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {eventos.length === 0 ? (
              <p className="text-gray-500 text-center">No hay eventos creados</p>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {eventos.map(evento => (
                  <div key={evento.id} className="border p-4 rounded-lg shadow relative">
                    <img src={evento.imagen} alt="Evento" className="w-full h-32 object-cover rounded mb-2" />
                    <h4 className="font-bold">{evento.nombre}</h4>
                    <p>{evento.descripcion}</p>
                    <button
                      onClick={() => abrirModalEdicion(evento)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    >
                      <FiMoreVertical size={20} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Agregar Evento</h2>
            <input type="text" placeholder="Nombre" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, nombre: e.target.value })} />
            <input type="text" placeholder="Descripción" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, descripcion: e.target.value })} />
            <input type="text" placeholder="Precio" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, precio: e.target.value })} />
            <input type="text" placeholder="Lugar" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, lugar: e.target.value })} />
            <input type="date" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, fecha: e.target.value })} />
            <input type="text" placeholder="URL Imagen" className="border p-2 w-full mb-2" onChange={e => setNuevoEvento({ ...nuevoEvento, imagen: e.target.value })} />
            <button onClick={handleAgregarEvento} className="bg-green-500 text-white p-2 rounded">Guardar</button>
            <button onClick={() => setModalOpen(false)} className="ml-2 bg-red-500 text-white p-2 rounded">Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventosAdmin;
