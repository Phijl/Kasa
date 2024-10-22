import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";

function Fiche() {
  const { id } = useParams(); // Récupère l'ID du fiche depuis l'URL
  const [fiche, setFiche] = useState(null);

  useEffect(() => {
    // Requête pour récupérer les détails du fiche en fonction de l'ID
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFiche(data); // Stocke les données du fiche
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du fiche:",
          error
        );
      });
  }, [id]);

  if (!fiche) {
    return <div>Chargement...</div>; // Affichage pendant le chargement des données
  }

  return (
    <div className="Fiche">
      <Carrousel pictures={fiche.pictures} />
      <h1>{fiche.title}</h1>
      <p>{fiche.description}</p>
      {/* Autres détails du fiche */}
    </div>
  );
}

export default Fiche;
