import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FeaturedSection from "../components/Featured";
import PromoBanner from "../components/PromoBanner";
import DealSection from "../components/DealSection";
import ProductSection from "../components/ProductSection";
import "../styles/HomePage.css";
import SpecialOffer from "../components/SpecialOffer";
import HeelsBanner from "../components/HeelsBanner";
import TrendingSection from "../components/TrendingSection";
import HorizontalProducts from "../components/HorizontalProducts";
import NewArrivals from "../components/NewArrivals";
import SponsoredSection from "../components/SponsoredSection";
import BottomNav from "../components/BottomNav";

const HeaderPage = () => {
  return (
    <div className="phone-frame">
      <div className="page-content">

        <TopBar />
        <Header />
        <SearchBar />
        <FeaturedSection />
        <PromoBanner />
        <DealSection />
        <ProductSection />
        <SpecialOffer />
        <HeelsBanner />
        <TrendingSection />
        <HorizontalProducts />
        <NewArrivals />
        <SponsoredSection />
        <BottomNav />

      </div>
    </div>
  );
};

export default HeaderPage;
