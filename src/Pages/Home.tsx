import React from "react";
import HeroSection from "../components/complex/HeroSection";
import FlashSalesSection from "../components/complex/FlashSalesSection";
import Wrapper from "../components/compound/Wrapper";
import { CategoriesSection } from "../components/complex/CategoriesSection";
import BestSellingSection from "../components/complex/BestSellingSection";
import PromoBanner from "../components/complex/PromoBanner";
import ExploreOurProducts from "../components/complex/ExploreOurProducts";
import ServicesSection from "../components/complex/ServicesSection";
import NewArrivalSection from "../components/complex/NewArrivalSection";

const Home: React.FC = () => {
  return (
    <Wrapper>
      <HeroSection />
      <FlashSalesSection />
      <CategoriesSection />
      <BestSellingSection />
      <PromoBanner />
      <ExploreOurProducts />
      <NewArrivalSection />
      <ServicesSection />
    </Wrapper>
  );
};

export default Home;
