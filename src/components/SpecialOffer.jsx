import React from "react";
import "../styles/SpecialOffer.css";
import offer from "../images/offer.png";

const SpecialOffer = () => {
  return (
    <div className="offer-card">

      <img src={offer} alt="offer" className="offer-img"/>

      <div className="offer-text">
        <h3>
          Special Offers <span>😱</span>
        </h3>

        <p>
          We make sure you get the offer you need at best prices
        </p>
      </div>

    </div>
  );
};

export default SpecialOffer;
