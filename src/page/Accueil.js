import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import AppartementGrille from "../components/AppartementGrille";

const Accueil = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AppartementGrille />
    </div>
  );
};

export default Accueil;
