import React from "react";
import "../styles/HeroPage.css";
import TopBar from "./TopBar";
import BottomSection from "./BottomSection";
import heroImage from "../images/hero.png";

const HeroPage = () => {
  return (
    <div className="screen">
      <img src={heroImage} alt="Hero" className="background" />
      <TopBar />
      <BottomSection />
    </div>
  );
};

export default HeroPage;
