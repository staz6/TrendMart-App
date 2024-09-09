import React from "react";
import HeroSection from "../components/complex/HeroSection";
import ProductCard from "../components/compound/ProductCard";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="xl:pl-32 mt-20 mb-20">
        <ProductCard />
      </div>
    </>
  );
};

export default Home;
