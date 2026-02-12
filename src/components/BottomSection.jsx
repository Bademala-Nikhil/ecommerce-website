import React from "react";
import { useNavigate } from "react-router-dom";

const BottomSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-section">
      <div className="text-content">
        <h1>You want Authentic, here you go!</h1>
        <p>Find it here, buy it now!</p>
      </div>

      <button
        className="cta-btn"
        onClick={() => navigate("/home")}
      >
        Get Started
      </button>
    </div>
  );
};

export default BottomSection;
