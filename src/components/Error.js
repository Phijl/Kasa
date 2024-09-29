import React from "react";
import "./Error.css";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <img src="404.png" alt="404" />
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <div className="link">
        <NavLink to="/"> Retourner sur la page d’accueil</NavLink>
      </div>
    </div>
  );
}

export default Error;
