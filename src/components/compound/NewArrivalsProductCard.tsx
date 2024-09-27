import React from "react";
import Button from "../shared/Button";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  onShopNow: () => void;
}
const NewArrivalsProductCard: React.FC<Product> = ({
  title,
  description,
  imageUrl,
  onShopNow,
}) => (
  <div
    data-testid="NewArrivalsProductCard"
    className="relative overflow-hidden rounded-md shadow-lg group h-full"
  >
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-[18rem] sm:h-full object-cover"
    />
    <div className="absolute inset-0 bg-black  opacity-0 group-hover:opacity-50 transition-opacity duration-300 " />
    <div className="absolute inset-0 flex flex-col justify-end px-6 pb-8 text-white">
      <h3 className="text-2xl tracking-wider font-medium font-inter">
        {title}
      </h3>
      <p
        className="text-sm my-[2%] md:text-[12px] lg:text-sm font-poppins font-[300]"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <Button
        icon=""
        onClick={onShopNow}
        description="Shop Now"
        className="text-start hover:text-text1 transition-all duration-200  font-poppins font-normal border-b border-white w-fit border-opacity-50"
      />
    </div>
  </div>
);

export default NewArrivalsProductCard;
