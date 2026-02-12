import React from "react";
import "../styles/HeelsBanner.css";
import heels from "../images/LS.png";

const HeelsBanner = () => {
  return (
    <div className="heels-card">

      <img src={heels} alt="heels" className="heels-img"/>

      <div className="heels-text">
        <h3>Flat and Heels</h3>
        <p>Stand a chance to get rewarded</p>

        <button className="visit-btn">
          Visit now →
        </button>
      </div>

    </div>
  );
};

export default HeelsBanner;
