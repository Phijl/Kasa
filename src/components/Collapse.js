import React, { useState } from "react";
import "./Collapse.css";

function Collapse({ title, content, customClass }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${customClass}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h4>{title}</h4>
        <span>{isOpen ? "\u25B2" : "\u25BC"}</span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
