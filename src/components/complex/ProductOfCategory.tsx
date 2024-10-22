import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../Pages/Product";
import ProductCard from "../compound/ProductCard";
import SkeletonLoader from "../compound/SkeletonLoader";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductOfCategory: React.FC = () => {
  const { category } = useParams();

  const fetchCategoryProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["CategoryProducts", category],
    queryFn: fetchCategoryProducts,
  });

  if (error) {
    return <p>Error loading products</p>;
  }
  if (data) {
    console.log(data);
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
