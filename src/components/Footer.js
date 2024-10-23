import React from "react";
import logoKasaWhite from "../Images/LogoKasaWhite.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logoKasaWhite} alt="Kasa" />
      <p>
        © 2020 Kasa. All <span>rights reserved</span>
      </p>
    </div>
  );
}

export default Footer;
