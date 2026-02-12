import React from "react";
import "../styles/TrendingSection.css";

const TrendingSection = () => {
  return (
    <div className="trending-section">

      {/* LEFT */}
      <div className="trend-left">
        <h3>Trending Products</h3>

        <div className="trend-date">
          <span className="calendar">📅</span>
          <span>Last Date 29/02/22</span>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <button className="trend-btn">
        View all →
      </button>

    </div>
  );
};

export default TrendingSection;
