import React, { useEffect, useState } from "react";
import "./Appartement.css";
import { NavLink } from "react-router-dom";

function Appartement() {
  const [appartements, setAppartements] = useState([]);

  useEffect((fetchAppartement) => {
    // Appel à l'API pour récupérer les données
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => {
        setAppartements(data); // Stocke la liste des appartements
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  return (
    <div className="appartements-list">
      {appartements.map((appartement) => (
        <NavLink
          key={appartement.id}
          className="card"
          to={`/logement/${appartement.id}`}
        >
          <div className="card-content">
            <img
              src={appartement.cover}
              alt={appartement.title}
              className="cover-image"
            />
            <div className="card-title">{appartement.title}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default Appartement;
