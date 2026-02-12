import React from "react";
import logo from "../images/logo.png";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">

      {/* Menu Icon */}
      <div className="menu-btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Logo + Text */}
      <div className="brand">
        <img src={logo} alt="logo" />
        <span>Stylish</span>
      </div>

      {/* Avatar */}
      <div className="avatar">A</div>

    </div>
  );
};

export default Header;
