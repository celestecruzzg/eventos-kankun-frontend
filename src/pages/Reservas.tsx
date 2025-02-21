import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiBell, FiUser, FiGrid, FiCalendar, FiUsers, FiBook } from "react-icons/fi";


interface Reserva {
  id: number;
  nombre: string;
  descripcion: string;
}

const Reservas = () => {
  const navigate = useNavigate();
  const [reservas] = useState<Reserva[]>([
    { id: 1, nombre: "Reserva 1", descripcion: "Descripción de la reserva 1" },
    { id: 2, nombre: "Reserva 2", descripcion: "Descripción de la reserva 2" },
  ]);

  return (
    <div className="flex h-screen bg-[#D1DAF5]">
      <aside className="w-64 bg-[#222B60] text-white flex flex-col p-5">
      <div className="flex items-center gap-10 mb-15">
          <FiGrid size={24} />
          <h1 className="text-lg font-bold">EVENTOS KANKUN</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiGrid size={20} /> Dashboard
          </button>
          <button onClick={() => navigate("/eventos")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiCalendar size={20} /> Eventos
          </button>
          <button onClick={() => navigate("/participantes")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiUsers size={20} /> Participantes
          </button>
          <button onClick={() => navigate("/reservas")} className="flex items-center gap-3 bg-[#5C72B4] p-3 rounded">
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
                              <span>Usuario</span>
                            </div>
                          </div>
                        </header>

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
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Reservas;
