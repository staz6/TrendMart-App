import React from "react";

interface ProductSummaryProps {
  name: string;
  price: string;
  imageSrc: string;
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({
  name,
  price,
  imageSrc,
}) => (
  <div className="flex justify-between items-center">
    <div className="flex gap-6 items-center">
      <img className="h-10 w-12" src={imageSrc} alt="Product" />
      <h1>{name}</h1>
    </div>
    <span>{price}</span>
  </div>
);
