import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventosAdmin from "./pages/Admin/EventosAdmin";
import Eventos from "./pages/Eventos";
import ReservasAdmin from "./pages/Admin/ReservasAdmin";
import LoginPage from "./pages/login";
import Reservas from "./pages/Reservas";
import "./index.css";
import { Dashboardadmin } from "./pages/Admin/DashboardAdmin";
import DashboardUser from "./pages/DashboardUser";
import LandingPage from "./pages/landingPage/landingPage";
import { Hero } from './components/Landing/LandinngHero'
import ParticipantesAdmin from "./pages/Admin/ParticipantesAdmin";
import Participantes from "./pages/Participantes";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin/eventos" element={<EventosAdmin />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/admin/reservas"element={<ReservasAdmin />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/QyA" element={<Hero/>} />
        <Route path="/login" />
        <Route path="/registro" />
        <Route path="/admin/Dashboard" element={<Dashboardadmin />} />
        <Route path="/admin/participantes" element={<ParticipantesAdmin />} />
        <Route path="/Dashboard" element={<DashboardUser />} />
        <Route path="/participantes" element={<Participantes />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
