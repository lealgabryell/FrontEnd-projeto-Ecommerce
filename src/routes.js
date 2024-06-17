import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainCliente from "./pages/cliente/main/index.js";

const Rout = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/clientes" element={<MainCliente />} />
    </Routes>
  </BrowserRouter>
);

export default Rout;
