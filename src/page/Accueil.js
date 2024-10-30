import React from "react";
import ban from "../Images/banner.png";
import Banner from "../components/Banner";
import AppartementGrille from "../components/AppartementGrille";

const Accueil = () => {
  return (
    <div>
      <Banner backgroundImage={ban} showTitle={true} />
      <AppartementGrille />
    </div>
  );
};

export default Accueil;
