import React from "react";
import "../styles/Featured.css";

import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c5 from "../images/c5.png";
const categories = [
  { name: "Beauty", img: c1 },
  { name: "Fashion", img: c2 },
  { name: "Kids", img: c3 },
  { name: "Mens", img: c4 },
  { name: "Womens", img: c5 }
];

const FeaturedSection = () => {
  return (
    <div className="featured-section">

      {/* header row */}
      <div className="featured-header">
        <h3>All Featured</h3>

        <div className="actions">
          <button className="pill">Sort ⬍</button>
          <button className="pill">Filter ⌄</button>
        </div>
      </div>

      {/* categories */}
      <div className="categories">
        {categories.map((item, i) => (
          <div className="cat-item" key={i}>
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default FeaturedSection;
