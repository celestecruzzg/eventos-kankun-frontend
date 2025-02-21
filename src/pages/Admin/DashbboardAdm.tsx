
import "./DashboardAdmin.css"
import logo from "../../assets/logo.png"
import book from "../../assets/book_5_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import user from "../../assets/diversity_3_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import grafica from "../../assets/monitoring_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react"

export function Dashboardadmin() {
   const [isOpen, setIsOpen] = useState(false);
   const [notificationsOpen, setNotificationsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const toggleNotifications = () => {
      setNotificationsOpen(!notificationsOpen);
  };

   const closeDropdown = (event: MouseEvent) => {
      if (
         !(
            (event.target as HTMLElement).matches('#dropdownAvatarNameButton') ||
            (event.target as HTMLElement).closest('#dropdownAvatarName')
         )
      ) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      window.addEventListener('click', closeDropdown);

      return () => {
         window.removeEventListener('click', closeDropdown);
      };
   }, []);


   return (
      <div className="dashboardd">
         {/* Sidebar */}
         <aside className="ssidebar">
            <div className="logo">
               
               <img src={logo} alt="Logo" className="logoSide" /> 
               
            </div>

            <nav className="nav-menuu">
               <Link to="/Dashboard Admin" className="nav-item active">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
               <path fill="#ffffff" d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z"/></svg>
                  Dashboard
               </Link>
               <Link to ="/admin/eventos" className="nav-itemm">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
               <path fill="#ffffff" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>
                  Eventos
               </Link>
               <Link to="/Participantes" className="nav-itemm">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"/></svg>
                  Participantes
               </Link>
               <a href="/admin/reservas" className="nav-itemm">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
               <path fill="#ffffff" d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z"/></svg>
                  Reservas y recursos
               </a>
            </nav>
         </aside>
         
         <main className="main-content">

            {/* Header */}
            <header className="headerr">
               <h1>Dashboard</h1>
               <div className="user-profile">
               <button
                    id="notificationButton"
                    className="notification-button"
                    type="button"
                    onClick={toggleNotifications}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#000000" d="M224 0c-17.7 0-32 14.3-32 32l0 19.2C119 66 64 130.6 64 208l0 25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416l400 0c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4l0-25.4c0-77.4-55-142-128-156.8L256 32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112l0 25.4c0 47.9 13.9 94.6 39.7 134.6L72.3 368C98.1 328 112 281.3 112 233.4l0-25.4c0-61.9 50.1-112 112-112zm64 352l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" /></svg>
                </button>
                  <div className="user-info">
                  <button
                        id="dropdownAvatarNameButton"
                        className="dropdown-avatar-button"
                        type="button"
                        onClick={toggleDropdown}
                     >

                        <img className="avatar" src="https://i.pinimg.com/736x/6a/f8/9f/6af89fb8f3586b160b5dfd921bac2a0f.jpg" alt="user photo" />
                        Jill
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                           <path fill="#000000" d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                     </button>
                     <span>Jill Valentine</span>
                     <small>Administrador</small>
                     {/*dropwdown profile*/}

                     
                     {isOpen && (
                        <div id="dropdownAvatarName" className="dropdown-menu">

                        <ul className="menu-list" aria-labelledby="dropdownAvatarNameButton">
                           <li><Link to ="/Dashboard Admin" className="menu-item">Dashboard</Link></li>
                           <li><Link to ="#" className="menu-item">Settings</Link></li>
                        </ul>
                        <div className="menu-footer">
                           <Link to="/" className="menu-item">Sign out</Link>
                        </div>
                     </div>
                     )}
                      {notificationsOpen && (
                    <div id="notificationDropdown" className="dropdown-menu">
                        <ul className="menu-list" aria-labelledby="notificationButton">
                            <li><Link to="/admin/eventos" className="menu-item">Eventos disponibles</Link></li>
                            <li><Link to ="/admin/eventos" className="menu-item">Eventos próximos</Link></li>
                        </ul>
                    </div>
                )}
                  </div>
               </div>
            </header>



            {/* cartas */}
            <div className="stats-grid">
               <div className="stat-card">
                  <div className="stat-header">
                     <span>Total de Eventos</span>
                     <img src={book}/>
                  </div>
                  <div className="stat-content">
                     <h2>15</h2>
                     <small className="positive">+2 desde el último mes</small>
                  </div>
               </div>
               <div className="stat-card">
                  <div className="stat-header">
                     <span>Participantes Inscritos</span>
                     <img src={user}/>
                  </div>
                  <div className="stat-content">
                     <h2>573</h2>
                     <small className="positive">+201 desde el último mes</small>
                  </div>
               </div>
               <div className="stat-card">
                  <div className="stat-header">
                     <span>Tasa de Ocupación</span>
                     <img src={grafica}/>
                  </div>
                  <div className="stat-content">
                     <h2>85%</h2>
                     <small className="positive">+8% desde el último mes</small>
                  </div>
               </div>
            </div>

            {/* Charts Section */}
            <div className="charts-grid">
               <div className="chart-card">
                  <h3>Actividad de <br/>Eventos</h3>
                  <div className="chart-legend">
                     <div className="legend-item">
                        <span className="dot green"></span>
                        <span>Asistidos</span>
                     </div>
                     <div className="legend-item">
                        <span className="dot red"></span>
                        <span>Cancelados</span>
                     </div>
                     <div className="legend-item">
                        <span className="dot orange"></span>
                        <span>Pospuestos</span>
                     </div>
                  </div>
                  <div className="pie-chart">

                     {/* Simplified pie chart representation */}
                     <div className="pie"></div>
                  </div>
               </div>

               <div className="recent-events">
                  <div className="recent-header">
                     <h3>Eventos Recientes</h3>
                     <small>Has tenido 12 eventos este mes.</small>
                  </div>
                  <div className="events-list">
                     <div className="event-item">
                        <span className="event-avatar">OM</span>
                        <div className="event-info">
                           <h4>Conferencia Tech</h4>
                           <small>200 participantes</small>
                        </div>
                     </div>
                     <div className="event-item">
                        <span className="event-avatar">JL</span>
                        <div className="event-info">
                           <h4>Taller de Innovación</h4>
                           <small>50 participantes</small>
                        </div>
                     </div>
                     <div className="event-item">
                        <span className="event-avatar">WK</span>
                        <div className="event-info">
                           <h4>Feria de Empleo</h4>
                           <small>300 participantes</small>
                        </div>
                     </div>
                     <div className="event-item">
                        <span className="event-avatar">ET</span>
                        <div className="event-info">
                           <h4>Expo Turismo</h4>
                           <small>500 participantes</small>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   );
}
