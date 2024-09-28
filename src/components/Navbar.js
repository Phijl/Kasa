import React from "react";
import "./Navbar.css";
import "./Banner.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logokasa">
        <img src="LogoKasa.png" alt="Kasa" />
      </div>
      <div className="link">
        <NavLink to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink to="/apropos">
          <div>A propos</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
