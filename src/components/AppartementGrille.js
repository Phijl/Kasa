import React from "react";
import "./AppartementGrille.css";
import Appartement from "../components/Appartement";

function AppartementGrille() {
  return (
    <div className="Grille">
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
      <Appartement />
    </div>
  );
}

export default AppartementGrille;
