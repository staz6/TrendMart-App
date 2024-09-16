import React from "react";
import ProductCard from "../compound/ProductCard";
import productImage from "../../assets/productImage.png";
import Section from "./Section";

const FlashSalesSection: React.FC = () => {
  return (
    <Section sectionTitle="Today's" sliderTitle="Flash Sales" showTimer>
      {Array.from({ length: 6 }).map(() => (
        <ProductCard
          image={productImage}
          title="HAVIT HV-G92 Gamepad"
          price={120}
          originalPrice={160}
          discount="-40%"
          rating={4}
          onAddToCart={() => console.log("Added to cart")}
          onWishlist={() => console.log("Added to wishlist")}
          onViewDetails={() => console.log("View details")}
        />
      ))}
    </Section>
  );
};

export default FlashSalesSection;
