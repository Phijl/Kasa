import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Fiche from "../components/Fiche";

const Logement = () => {
  //On utilise useParams() pour extraire l'ID qui est dans l'URL
  const { id } = useParams();
  //stocker les infos du logement, null car on ne sais rien au depart
  const [logement, setLogement] = useState(null);
  //Ça nous dit si les infos sont encore en train d'être chargées
  const [loading, setLoading] = useState(true);
  //false pour error signifie qu'il n'y a pas de problème
  const [error, setError] = useState(false);

  useEffect(() => {
    // Appel à l'API pour vérifier si l'ID est valide
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Logement non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        setLogement(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération du logement:", error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // Afficher un message de chargement pendant la récupération des données
  if (loading) {
    return <div>Chargement...</div>;
  }

  // Si une erreur est survenue ou que l'ID est invalide, rediriger vers la page d'erreur
  if (error) {
    return <Navigate to="/erreur" />;
  }

  // Si tout est correct, afficher le composant Fiche
  return (
    <div>
      <Fiche />
    </div>
  );
};

export default Logement;
