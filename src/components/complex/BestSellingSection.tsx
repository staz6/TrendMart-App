import React from "react";
import Section from "./Section";
import ProductCard from "../compound/ProductCard";
import productImage from "../../assets/productImage.png";

const BestSellingSection: React.FC = () => {
  return (
    <Section
      showTimer={false}
      sectionTitle="This Month"
      showPagination
      sliderTitle="Best Selling Products"
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
        />
      ))}
    </Section>
  );
};

export default BestSellingSection;
