import { useState } from "react";
import { FiBell, FiUser, FiGrid, FiCalendar, FiUsers, FiBook } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Reserva {
  id: number;
  nombre: string;
  descripcion: string;
}

const ReservasAdmin = () => {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevaReserva, setNuevaReserva] = useState<Reserva>({
    id: 0,
    nombre: "",
    descripcion: "",
  });

  const navigate = useNavigate();

  const handleAgregarReserva = () => {
    if (nuevaReserva.nombre && nuevaReserva.descripcion) {
      setReservas([...reservas, { ...nuevaReserva, id: reservas.length + 1 }]);
      setNuevaReserva({ id: 0, nombre: "", descripcion: "" });
      setModalOpen(false);
    }
  };

  const handleEliminarReserva = (id: number) => {
    setReservas(reservas.filter(reserva => reserva.id !== id));
  };

  return (
    <div className="flex h-screen bg-[#D1DAF5]">
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
                  <h2 className="text-lg font-bold">Reservas y Recursos</h2>
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
            <AiOutlinePlus size={20} /> Agregar una Reserva
          </button>
        </div>

        <section>
          <div className="bg-white p-6 rounded-lg shadow-md">
            {reservas.length === 0 ? (
              <p className="text-gray-500 text-center">No hay reservas creadas</p>
            ) : (
              <div className="grid grid-cols-3 gap-6">
                {reservas.map(reserva => (
                  <div key={reserva.id} className="border p-4 rounded-lg shadow relative">
                    <h4 className="font-bold">{reserva.nombre}</h4>
                    <p>{reserva.descripcion}</p>
                    <button
                      onClick={() => handleEliminarReserva(reserva.id)}
                      className="mt-2 bg-red-500 text-white p-2 rounded"
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
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Agregar Reserva</h2>
            <input
              type="text"
              placeholder="Nombre"
              className="border p-2 w-full mb-2"
              onChange={e => setNuevaReserva({ ...nuevaReserva, nombre: e.target.value })}
            />
            <input
              type="text"
              placeholder="Descripción"
              className="border p-2 w-full mb-2"
              onChange={e => setNuevaReserva({ ...nuevaReserva, descripcion: e.target.value })}
            />
            <button onClick={handleAgregarReserva} className="bg-green-500 text-white p-2 rounded">
              Guardar
            </button>
            <button onClick={() => setModalOpen(false)} className="ml-2 bg-red-500 text-white p-2 rounded">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservasAdmin;
