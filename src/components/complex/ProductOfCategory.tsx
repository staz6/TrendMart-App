import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../compound/ProductCard";
import SkeletonLoader from "../compound/SkeletonLoader";
import { ProductType } from "../../Pages/Product";

const ProductOfCategory: React.FC = () => {
  const { category } = useParams();

  const fetchCategoryProducts = async (): Promise<ProductType[]> => {
    const { data } = await axios.get<ProductType[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<ProductType[]>({
    queryKey: ["CategoryProducts", category],
    queryFn: fetchCategoryProducts,
  });

  if (error) {
    return <p>Error loading products</p>;
  }

  return (
    <>
      {isLoading && (
        <>
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index}>
              <div
                data-testid="CategoryProductSkeleton"
                className="h-72 w-72 border bg-gray-300"
              />
            </SkeletonLoader>
          ))}
        </>
      )}
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          id={`${product.id}`}
          image={product.image}
          title={product.title}
          price={product.price}
          discount={0}
          rating={product.rating.rate}
        />
      ))}
    </>
  );
};

export default ProductOfCategory;
