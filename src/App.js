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
        <Route path="/logement" element={<Logement />} />
      </Routes>
    </BrowserRouter>
    /* il faut crée une Route path pour la page logement, avec l'id trouver dans le backend je ne sais pas comment faire encore*/
  );
}

export default App;
