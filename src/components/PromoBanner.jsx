import React from "react";
import "../styles/PromoBanner.css";

const PromoBanner = () => {
  return (
    <div className="promo-section">

      {/* background card */}
      <div className="promo-bg">

        {/* text content */}
        <div className="promo-content">
          <h2>50-40% OFF</h2>
          <p>Now in (product)</p>
          <p>All colours</p>

          <button className="shop-btn">
            Shop Now →
          </button>
        </div>

      </div>

      {/* dots */}
      <div className="promo-dots">
        <span></span>
        <span className="active"></span>
        <span></span>
      </div>

    </div>
  );
};

export default PromoBanner;
