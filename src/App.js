import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil.js";
import Apropos from "./page/Apropos.js";
import Erreur from "./page/Erreur.js";
import Logement from "./page/Logement.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
