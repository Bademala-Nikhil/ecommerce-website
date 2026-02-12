import React from "react";
import "../styles/HorizontalProducts.css";

import p1 from "../images/watch.png";
import p2 from "../images/shoes.png";

const products = [
  {
    title: 'IWC Schaffhausen 2021 Pilot\'s Watch "SIHH 2019" 44mm',
    price: "₹650",
    old: "₹1599",
    off: "60% off",
    img: p1,
  },
  {
    title: "Labbin White Sneakers For Men and Female",
    price: "₹650",
    old: "₹1250",
    off: "70% off",
    img: p2,
  },
];

const HorizontalProducts = () => {
  return (
    <div className="h-products">

      {products.map((item, i) => (
        <div className="h-card" key={i}>
          <img src={item.img} alt="" />

          <h4>{item.title}</h4>

          <div className="price">{item.price}</div>

          <div className="old-row">
            <span className="old">{item.old}</span>
            <span className="off">{item.off}</span>
          </div>
        </div>
      ))}

      <div className="h-arrow">›</div>

    </div>
  );
};

export default HorizontalProducts;
