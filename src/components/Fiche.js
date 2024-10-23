import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import "./Fiche.css";
import FullStar from "../Images/star-active.png";
import EmptyStar from "../Images/star-inactive.png";

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
    <div className="fiche-container">
      <div className="Fiche">
        <Carrousel pictures={fiche.pictures} />
        <div className="info">
          <div className="info1">
            <h1>{fiche.title}</h1>
            <h2>{fiche.location}</h2>
            <div className="tags-container">
              {fiche.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="info2">
            <div className="info3">
              <h3>
                {" "}
                {fiche.host.name.split(" ")[0]}
                <br />
                {fiche.host.name.split(" ")[1]}
              </h3>
              <img
                src={fiche.host.picture}
                alt={fiche.host.name}
                className="visage"
              />
            </div>
            <div className="rating-container">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={index < fiche.rating ? FullStar : EmptyStar}
                  alt={index < fiche.rating ? "Full Star" : "Empty Star"}
                  className="star"
                />
              ))}
            </div>
          </div>
        </div>
        <p>{fiche.description}</p>

        {/* Autres détails du fiche */}
      </div>
    </div>
  );
}

export default Fiche;
