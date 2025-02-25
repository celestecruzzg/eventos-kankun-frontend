import { Link } from "react-router-dom"
import { useState } from "react";
import logo from "../assets/logo.png"


export function Header() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleRegisterClick = () => {
    setShowModal(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, complete todos los campos.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }
    alert("Formulario enviado con éxito.");
  };


  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-transparent">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
      
        <div className="flex gap-4">
          <Link
            to="/login"
            className="border border-white rounded-full px-4 py-2 text-white hover:shadow-lg transition flex items-center justify-center"
          >
            Iniciar Sesión
          </Link>          <button
            className="bg-white text-indigo-900 rounded-full px-4 py-2 hover:bg-indigo-900 hover:text-white transition"
            onClick={handleRegisterClick}
          >
            Registrarse
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-transparent-20 z-50 pt-80">
          <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md relative">
            <span className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={handleCloseModal}>
              &times;
            </span>
            <h2 className="text-xl font-bold mb-2">Registrarse</h2>
            <p className="text-sm mb-4">Crea una nueva cuenta</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="text-left text-sm">Nombre:
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <label className="text-left text-sm">Apellido Paterno:
                <input type="text" name="surnameP" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <label className="text-left text-sm">Apellido Materno:
                <input type="text" name="surnameM" value={formData.name} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <label className="text-left text-sm">Correo Electrónico:
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <label className="text-left text-sm">Contraseña:
                <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <label className="text-left text-sm">Confirmar Contraseña:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full mt-1 p-2 border rounded-lg bg-gray-100 focus:ring-2 focus:ring-indigo-300" />
              </label>
              <button type="submit" className="w-full bg-indigo-800 text-white py-2 rounded-lg hover:bg-indigo-600 transition">Registrarse</button>
            </form>
          </div>
        </div>
      )}

    </header>
  )
}
