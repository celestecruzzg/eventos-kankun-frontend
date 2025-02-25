import React, { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = value.replace(/[<>\[\]{}]/g, "");
    setFormData({ ...formData, [name]: sanitizedValue });
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[<>\[\]{}]/g, "");
    setVerificationCode(sanitizedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden w-full max-w-6xl flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-8 md:p-12">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-gray-900">Iniciar sesión</h1>
              <p className="text-gray-600">Ingresa tus credenciales para acceder</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative h-64 lg:h-auto">
          <img
            src={new URL('../assets/images/evento-kankun.jpg', import.meta.url).href || "/placeholder.svg"}
            alt="Eventos Kankun Venue"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-grey-500 bg-opacity-30 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-2">Eventos</h2>
              <h1 className="text-6xl font-bold text-white">KANKUN</h1>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Verificación de Código</h2>
            <input
              type="text"
              placeholder="Ingrese el código"
              className="border p-2 w-full mb-2 rounded"
              value={verificationCode}
              onChange={handleCodeChange}
            />
            <div className="flex justify-end mt-4">
              <button className="bg-green-500 text-white p-2 rounded mr-2 hover:bg-green-600">
                Verificar
              </button>
              <button onClick={() => setModalOpen(false)} className="bg-red-500 text-white p-2 rounded hover:bg-red-600">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
