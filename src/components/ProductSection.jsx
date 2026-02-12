import React from "react";
import "../styles/ProductSection.css";

import p1 from "../images/p1.png";
import p2 from "../images/p2.png";

const products = [
  {
    title: "Women Printed Kurta",
    desc: "Neque porro quisquam est qui dolorem ipsum quia",
    price: "₹1500",
    old: "₹2499",
    off: "40%Off",
    rating: 4,
    reviews: "56890",
    img: p1
  },
  {
    title: "HRX by Hrithik Roshan",
    desc: "Neque porro quisquam est qui dolorem ipsum quia",
    price: "₹2499",
    old: "₹4999",
    off: "50%Off",
    rating: 4,
    reviews: "344567",
    img: p2
  }
];

const ProductSection = () => {
  return (
    <div className="product-section">

      {products.map((item, i) => (
        <div className="product-card" key={i}>

          <img src={item.img} className="product-img" alt="" />

          <h4>{item.title}</h4>
          <p className="desc">{item.desc}</p>

          <div className="price">
            {item.price}
          </div>

          <div className="discount">
            <span className="old">{item.old}</span>
            <span className="off">{item.off}</span>
          </div>

          <div className="rating">
            {"★".repeat(item.rating)}
            {"☆".repeat(5-item.rating)}
            <span>{item.reviews}</span>
          </div>

        </div>
      ))}

      {/* arrow */}
      <div className="next-arrow">›</div>

    </div>
  );
};

export default ProductSection;
