import React from "react";
import SectionTitle from "./../compound/SectionTitle";
import ProductCard from "../compound/ProductCard";
import { v4 as uuidv4 } from "uuid";
import productImage from "../../assets/productImage.png";

const RelatedItem: React.FC = () => {
  return (
    <div>
      <SectionTitle title="Related Items" />
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
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedItem;
