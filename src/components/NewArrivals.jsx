import React from "react";
import "../styles/NewArrivals.css";
import banner from "../images/summer-sale.png";

const NewArrivals = () => {
  return (
    <div className="arrivals-section">

      {/* image */}
      <img src={banner} alt="sale" className="arrivals-img" />

      {/* bottom content */}
      <div className="arrivals-content">

        <div className="arrivals-text">
          <h3>New Arrivals</h3>
          <p>Summer ’25 Collections</p>
        </div>

        <button className="arrivals-btn">
          View all →
        </button>

      </div>

    </div>
  );
};

export default NewArrivals;
