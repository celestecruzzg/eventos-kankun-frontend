import { FiBell, FiUser, FiGrid, FiCalendar, FiUsers, FiBook } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Eventos = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex h-screen bg-[#9BB7EB]">
      <aside className="w-64 bg-[#222B60] text-white flex flex-col p-5">
        <div className="flex items-center gap-10 mb-15">
          <FiGrid size={24} />
          <h1 className="text-lg font-bold">EVENTOS KANKUN</h1>
        </div>
        <nav className="flex flex-col gap-4">
          <button onClick={() => navigate("/dashboard")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiGrid size={20} /> Dashboard
          </button>
          <button onClick={() => navigate("/eventos")} className="flex items-center gap-3 bg-[#5C72B4] p-3 rounded">
            <FiCalendar size={20} /> Eventos
          </button>
          <button onClick={() => navigate("/participantes")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
            <FiUsers size={20} /> Participantes
          </button>
          <button onClick={() => navigate("/reservas")} className="flex items-center gap-3 hover:bg-[#5C72B4] p-3 rounded">
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
              <span>Usuario</span>
            </div>
          </div>
        </header>
        <section>
          <h3 className="text-xl font-semibold mb-4">Listado de eventos</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-500 text-center">No hay eventos creados</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Eventos;
