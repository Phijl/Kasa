import React from "react";
import "./Banner.css";

function Banner({ backgroundImage, showTitle }) {
  return (
    <div className="banner-container">
      <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {showTitle && (
          <h1 className="banner-title">
            Chez vous,<span className="line-break"> partout et ailleurs</span>
          </h1>
        )}
      </div>
    </div>
  );
}

export default Banner;
