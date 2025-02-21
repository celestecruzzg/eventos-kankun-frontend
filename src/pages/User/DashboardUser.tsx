import React, { useEffect, useState } from 'react';
import "./DashboardUser.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';

function DashboardUser() {
   const [isOpen, setIsOpen] = useState(false);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
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
      <div className="Dashboard">
         {/* Sidebar */}
         <aside className="Sidebar">
            <div className="logo">

               <img src={logo} alt="Logo" className="logoSide" />

            </div>

            <nav className="Nav-menu">
               <Link to="/Dahboard User" className="Nav-item active">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                     <path fill="#ffffff" d="M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5l0 112.2c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7L0 413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3l0-119.1c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3l0-112.2c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2 0-89.2L392 121l0 89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4l0-100.5L256 323.2l0 95.9-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1 0-100.5L528 323.2l0 90.7c0 3.2-1.9 6-4.8 7.3z" /></svg>
                  Dashboard
               </Link>
               <Link to="/eventos" className="Nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="#ffffff" d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z" /></svg>
                  Eventos
               </Link>
               <Link to="#" className="Nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z" /></svg>
                  Participantes
               </Link>
               <Link to="/reservas" className="Nav-item">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                     <path fill="#ffffff" d="M0 48C0 21.5 21.5 0 48 0l0 48 0 393.4 130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4 336 48 48 48 48 0 336 0c26.5 0 48 21.5 48 48l0 440c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488L0 48z" /></svg>
                  Reservas y recursos
               </Link>
            </nav>
         </aside>
         <main className="main">
            {/* Header */}
            <header className="header">
               <h1>Dashboard</h1>
               <div className="user-profile">
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
                     <small>Usuario</small>
                     {/*dropwdown profile*/}


                     {isOpen && (
                        <div id="dropdownAvatarName" className="dropdown-menu">

                           <ul className="menu-list" aria-labelledby="dropdownAvatarNameButton">
                              <li><Link to ="/Dahboard User" className="menu-item">Dashboard</Link></li>
                              <li><Link to="/configuracion" className="menu-item">Settings</Link></li>
                           </ul>
                           <div className="menu-footer">
                              <Link to ="/" className="menu-item">Sign out</Link>
                           </div>
                        </div>
                     )}
                     
                  </div>
               </div>
            </header>

            {/* Left Column */}
            <div className="left-column">
               {/* Profile Card */}
               <div className="profile-carta">
                  <div className="perfil-header">
                     <div className="perfil">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTgWd1PgllAdPLgHQtSGKypvIFObCT.png" alt="Profile Picture" />
                     </div>
                     <h1>Jill Valentine</h1>
                     <span className="username">Username</span>
                  </div>

                  <div className="perfil-info">
                     <div className="info-campos">
                        <label>Nombre</label>
                        <div className="campo-nombre">Jill Valentine Williams</div>
                     </div>
                     <div className="info-campos">
                        <label>Correo</label>
                        <div className="campo-correo">Jillw@gmail.com</div>
                     </div>
                  </div>

                  <div className="profile-estatus">
                     <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                           <path fill="#569fd7" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                        </svg>
                        <div className="status-info">
                           <h3>15</h3>
                           <small>Eventos Guardados</small>
                        </div>
                     </div>
                     <div className="status">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                           <path fill="#74C0FC" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                        </svg>
                        <div className="status-info">
                           <h3>72.5%</h3>
                           <small>Eventos Asistidos</small>
                        </div>
                     </div>
                  </div>
               </div>
               {/* Activity Chart */}
               <div className="activity-cardd">
                  <h2>Actividad de <br /> Eventos</h2>
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
                     <div className="pie"></div>
                  </div>
               </div>
            </div>
            {/* Help Section */}
            <div className="help-section">
               <h2>Necesitas Ayuda?</h2>
               <p>Accede a todos tus eventos <br /> para no perderte <br />ninguno!</p>
               <button className="btn-primary">
                  <Link to="/eventos" className='boton-explorar'>Mis Eventos</Link>
                  
               </button>
            </div>


            {/* Upcoming Events */}
                <div className="upcoming-events">
                    <h2>EVENTOS PROXIMOS</h2>
                    <div className="events-list">
                        <div className="event-card">
                            <div className="event-time">15:00</div>
                            <div className="event-content">
                                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTgWd1PgllAdPLgHQtSGKypvIFObCT.png" alt="Event" className="event-image" />
                                <div className="event-info">
                                    <h3>Pedagogique FLE</h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" height="10" width="8.75" viewBox="0 0 448 512">
                                    <path fill="#e31616" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg> La Salle Cancun</p>
                                </div>
                            </div>
                            <div className="event-date">
                                <span>Febrero 22</span>
                                <span className="status confirmed">Confirmado</span>
                            </div>
                        </div>

                        <div className="event-card">
                            <div className="event-time">20:00</div>
                            <div className="event-content">
                                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-oTgWd1PgllAdPLgHQtSGKypvIFObCT.png" alt="Event" className="event-image" />
                                <div className="event-info">
                                    <h3>Flygirl Party</h3>
                                    <p><svg xmlns="http://www.w3.org/2000/svg" height="10" width="8.75" viewBox="0 0 448 512">
                                    <path fill="#e31616" d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8l176 0 0 176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"/></svg>
                                     Teatro Xbalamqué</p>
                                </div>
                            </div>
                            <div className="event-date">
                                <span>Febrero 24</span>
                                <span className="status pending">Pendiente</span>
                            </div>
                        </div>
                    </div>
                </div>

         </main>
      </div>
   );
};

export default DashboardUser;
