import React from "react";
import "../styles/SponsoredSection.css";
import shoes from "../images/sponser-shoes.png";

const SponsoredSection = () => {
  return (
    <div className="sponsored-section">

      {/* title */}
      <h3 className="sponsored-title">Sponserd</h3>

      {/* image card */}
      <div className="sponsored-card">
        <img src={shoes} alt="offer" />
      </div>

      {/* bottom row */}
      <div className="sponsored-bottom">
        <span>up to 50% Off</span>
        <span className="arrow">›</span>
      </div>

    </div>
  );
};

export default SponsoredSection;
