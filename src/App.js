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
    <div id="root">
      <div className="main-content">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="*" element={<Erreur />} />
            <Route path="/logement/:id" element={<Logement />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
