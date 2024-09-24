import React from "react";
import ProductCard from "../compound/ProductCard";
import Section from "./Section";
import productImage from "../../assets/productImage.png";

const ExploreOurProducts: React.FC = () => {
  return (
    <Section
      showTimer={false}
      sectionTitle="Our Products"
      showPagination
      sliderTitle="Explore Our Products"
      testId="ExploreOurProducts"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductCard
          key={index}
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={160}
          discount={0}
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
          New
        />
      ))}
    </Section>
  );
};

export default ExploreOurProducts;
