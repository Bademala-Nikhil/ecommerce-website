import React from "react";
import "../styles/DealSection.css";

const DealSection = () => {
  return (
    <div className="deal-section">

      {/* left content */}
      <div className="deal-left">
        <h3>Deal of the Day</h3>

        <div className="timer">
          ⏱ 22h 55m 20s remaining
        </div>
      </div>

      {/* button */}
      <button className="view-btn">
        View all →
      </button>

    </div>
  );
};

export default DealSection;
