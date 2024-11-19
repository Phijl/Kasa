import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./page/Accueil";
import Apropos from "./page/Apropos";
import Erreur from "./page/Erreur";
import Logement from "./page/Logement";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id="app-container">
      <BrowserRouter>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
