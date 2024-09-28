import React from "react";
import Navbar from "./components/Navbar.js";
import Banner from "./components/Banner.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil.js";
import Apropos from "./page/Apropos.js";
import Erreur from "./page/Erreur.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
    /**/
  );
}

export default App;
