import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Hero } from './components/Landing/LandinngHero'
import "./index.css"
import React from 'react'
import LandingPage from './pages/landingPage/landingPage'
import DashboardUser from './pages/User/DashboardUser'
import { Dashboardadmin } from './pages/Admin/DashbboardAdm'



function AppRoutes() {
 
  return (
    <React.StrictMode>
   <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
        <Route path="/QyA" element={<Hero/>} />
        <Route path="/login" />
        <Route path="/registro" />
        <Route path="/Dashboard Admin" element={<Dashboardadmin />} />
        <Route path="/Dashboard User" element={<DashboardUser />} />
        {/*<Route path="/admin/eventos" element={<EventosAdmin />} />    */}
        {/*<Route path="/eventos" element={<Eventos />} />    */}
        {/* <Route path="/admin/reservas"element={<ReservasAdmin />} /> */}
       {/*  <Route path="/reservas" element={<Reservas />} /> */}

    </Routes>
   </Router>
  </React.StrictMode>
  )
}

export default AppRoutes