import React from "react";
import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">

      {/* Search Icon */}
      <svg className="search-icon" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7" stroke="#999" strokeWidth="2" fill="none"/>
        <line x1="20" y1="20" x2="16.5" y2="16.5" stroke="#999" strokeWidth="2"/>
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search any Product.."
      />

      {/* Mic Icon */}
      <svg className="mic-icon" viewBox="0 0 24 24">
        <rect x="9" y="2" width="6" height="12" rx="3" fill="#999"/>
        <path d="M5 11a7 7 0 0 0 14 0" stroke="#999" strokeWidth="2" fill="none"/>
        <line x1="12" y1="18" x2="12" y2="22" stroke="#999" strokeWidth="2"/>
      </svg>

    </div>
  );
};

export default SearchBar;
