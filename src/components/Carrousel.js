import React, { useState } from "react";
import "./Carrousel.css";

function Carrousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      <button onClick={prevImage} className="carrousel-button">
        &#10094; {/* Flèche gauche */}
      </button>
      <img
        src={pictures[currentIndex]}
        alt={`Photo ${currentIndex + 1}`}
        className="carrousel-image"
      />
      <button onClick={nextImage} className="carrousel-button">
        &#10095; {/* Flèche droite */}
      </button>
    </div>
  );
}

export default Carrousel;
