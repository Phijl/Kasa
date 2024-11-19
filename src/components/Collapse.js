import React, { useState, useRef } from "react";
import "./Collapse.css";

function Collapse({ title, content, customClass }) {
  const [isOpen, setIsOpen] = useState(false);
  //useRef est utilisé pour obtenir la hauteur du contenu (contentRef)
  const contentRef = useRef(null);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${customClass}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h4>{title}</h4>
        <span className={`collapse-icon ${isOpen ? "rotate" : ""}`}>
          {isOpen ? "\u25B2" : "\u25B2"}
        </span>
      </div>
      <div
        //Quand isOpen est true, la hauteur est définie sur la hauteur réelle du contenu (scrollHeight), permettant de "tirer" le tiroir.
        //Quand isOpen est false, la hauteur est définie sur 0px, créant l'effet de "fermeture".
        className="collapse-content-wrapper"
        style={{
          height: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className="collapse-content" ref={contentRef}>
          {content}
        </div>
      </div>
    </div>
  );
}

export default Collapse;
