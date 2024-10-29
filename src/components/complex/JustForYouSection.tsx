import React from "react";
import SectionTitle from "./../compound/SectionTitle";
import ProductCard from "../compound/ProductCard";
import Button from "../shared/Button";
import { mockProducts } from "../../mockProductData";

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
        {mockProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            price={product.price}
            id={`${product.id}`}
            discount={0}
            rating={product.rating.rate}
          />
        ))}
      </div>
    </div>
  );
};

export default JustForYouSection;
