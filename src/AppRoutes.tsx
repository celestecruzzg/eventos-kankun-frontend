//import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import { Dashboardadmin } from './pages/Admin/DashbboardAdm';
import DashboardUser from './pages/User/DashboardUser';
import { Hero } from './components/Landing/LandinngHero';

function AppRoutes() {

  return(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/QyA" element={<Hero/>} />
          <Route path="/login" />
          <Route path="/registro" />
          <Route path="/Dashboard Admin" element={<Dashboardadmin />} />
          <Route path="/Dahboard User" element={<DashboardUser />} />
          {/*<Route path="/admin/eventos" element={<EventosAdmin />} />    */}
          {/*<Route path="/eventos" element={<Eventos />} />    */}
  
          </Routes>
      </Router>
    </React.StrictMode>
  )
}

export default AppRoutes;