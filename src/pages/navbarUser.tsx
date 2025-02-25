"use client"
import { useState } from "react"
import { Bell, LogOut, Settings, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const NavbarUser = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleLogout = () => {
    // Eliminar los datos de usuario del localStorage
    localStorage.removeItem("userData")
    // Cerrar el dropdown
    setIsOpen(false)
    // Redirigir al usuario a la página de inicio
    navigate("/")
  }

  return (
    <nav className="bg-white shadow-md rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="font-bold font-['Poppins', sans-serif]">Dashboard</h1>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div>
              <h4 className="ml-3 text-indigo-800 font-['Poppins', sans-serif]">Jill Valentine</h4>
              <p className="text-xs ml-14 text-gray-700 font-['Poppins', sans-serif]">Usuario</p>
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://i.pinimg.com/736x/6a/f8/9f/6af89fb8f3586b160b5dfd921bac2a0f.jpg"
                    alt="User avatar"
                  />
                </button>
              </div>

              {isOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <Link
                    to="/Dashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    <User className="inline-block w-4 h-4 mr-2" />
                    Dashboard
                  </Link>
                  <Link
                    to="/perfil"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    <Settings className="inline-block w-4 h-4 mr-2" />
                    Ajustes
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    <LogOut className="inline-block w-4 h-4 mr-2" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/Dashboard"
            className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/eventos"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Eventos
          </Link>
          <Link
            to="/participantes"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Participantes
          </Link>
          <Link
            to="/reservas"
            className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
          >
            Reservas y recursos
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="flex items-center px-4">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://i.pinimg.com/736x/6a/f8/9f/6af89fb8f3586b160b5dfd921bac2a0f.jpg"
                alt="User avatar"
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium text-gray-800">Jill Valentine</div>
              <div className="text-sm font-medium text-gray-500">jill@example.com</div>
            </div>
            <button
              type="button"
              className="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1">
            <Link
              to="/perfil"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Perfil
            </Link>
            <Link
              to="/perfil"
              className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Ajustes
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavbarUser

