import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AppartementGrille from "../components/AppartementGrille";
import Home from "../components/Home";
import Footer from "../components/Footer";

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <Home>
        <Banner />
        <AppartementGrille />
      </Home>
      <Footer />
    </div>
  );
};

export default Accueil;
