import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventosAdmin from "./pages/Admin/EventosAdmin";
import Eventos from "./pages/Eventos";
import ReservasAdmin from "./pages/Admin/ReservasAdmin";
import Reservas from "./pages/Reservas";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin/eventos" element={<EventosAdmin />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/admin/reservas"element={<ReservasAdmin />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
