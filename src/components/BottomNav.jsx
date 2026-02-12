import React from "react";
import "../styles/BottomNav.css";
import { Home, Heart, ShoppingCart, Search, Settings } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="bottom-nav">

      <div className="nav-item active">
        <Home size={24} />
        <span>Home</span>
      </div>

      <div className="nav-item">
        <Heart size={24} />
        <span>Wishlist</span>
      </div>

      {/* center floating button */}
      <div className="nav-center">
        <ShoppingCart size={28} />
      </div>

      <div className="nav-item">
        <Search size={24} />
        <span>Search</span>
      </div>

      <div className="nav-item">
        <Settings size={24} />
        <span>Setting</span>
      </div>

    </div>
  );
};

export default BottomNav;
