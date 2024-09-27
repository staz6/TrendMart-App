import React from "react";
import HeroSection from "../components/complex/HeroSection";
import ProductCard from "../components/compound/ProductCard";
import productImage from "../assets/productImage.png";
import FlashSalesSection from "../components/complex/FlashSalesSection";
import Wrapper from "../components/compound/Wrapper";
import { CategoriesSection } from "../components/complex/CategoriesSection";
import BestSellingSection from "../components/complex/BestSellingSection";
import PromoBanner from "../components/complex/PromoBanner";
import ExploreOurProducts from "../components/complex/ExploreOurProducts";
import ServicesSection from "../components/complex/ServicesSection";
const Home: React.FC = () => {
  return (
    <Wrapper>
      <HeroSection />
      <div className=" justify-center sm:justify-normal  margin-auto  mt-20 mb-20 flex flex-wrap gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCard
            key={index}
            image={productImage}
            title="HAVIT HV-G92 Gamepad"
            price={120}
            discount={40}
            rating={4}
            onAddToCart={() => console.log("Added to cart")}
            onWishlist={() => console.log("Added to wishlist")}
            onViewDetails={() => console.log("View details")}
          />
        ))}
      </div>
      <FlashSalesSection />
      <CategoriesSection />
      <BestSellingSection />
      <PromoBanner />
      <ExploreOurProducts />
      <ServicesSection />
    </Wrapper>
  );
};

export default Home;
