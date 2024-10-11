import React from "react";
import SectionTitle from "./../compound/SectionTitle";
import ProductCard from "../compound/ProductCard";
import { v4 as uuidv4 } from "uuid";
import productImage from "../../assets/productImage.png";
import Button from "../shared/Button";

const JustForYouSection: React.FC = () => {
  return (
    <div data-testid="JustForYouSection">
      <div className="flex justify-between">
        <SectionTitle
          className="text-black text-lg font-medium"
          title="Just For You"
        />
        <Button
          onClick={() => {}}
          icon=""
          description="See All"
          className="text-black hover:bg-black hover:text-white transition-all duration-200 border rounded-[0.25rem] border-black px-8 py-3 font-medium font-poppins"
        />
      </div>

      <div className=" justify-center sm:justify-normal  margin-auto  mt-10 mb-10 flex flex-wrap gap-5 xl:gap-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProductCard
            key={index}
            image={productImage}
            title="HAVIT HV-G92 Gamepad"
            price={120}
            id={uuidv4()}
            discount={40}
            rating={4}
            onAddToCart={() => console.log("Added to cart")}
            onWishlist={() => console.log("Added to wishlist")}
            onViewDetails={() => console.log("View details")}
          />
        ))}
      </div>
    </div>
  );
};

export default JustForYouSection;
