import React from "react";
import Wrapper from "../components/compound/Wrapper";
import { CategoriesSection } from "../components/complex/CategoriesSection";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductType } from "./Product";
import ProductCard from "../components/compound/ProductCard";
import SkeletonLoader from "../components/compound/SkeletonLoader";

const BrowseByCategoryProducts: React.FC = () => {
  const { category } = useParams();

  const fetchCategoryProducts = async (): Promise<ProductType[]> => {
    const { data } = await axios.get<ProductType[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    return data;
  };

  const { data, isLoading } = useQuery<ProductType[]>({
    queryKey: ["CategoryProducts", category],
    queryFn: fetchCategoryProducts,
  });

  return (
    <Wrapper>
      <CategoriesSection />
      <div className="flex flex-wrap justify-center sm:justify-between">
        {isLoading && (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index}>
                <div
                  data-testid="ProductSkeleton"
                  className="h-72 mb-4 w-72 border bg-gray-300"
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
      </div>
    </Wrapper>
  );
};

export default BrowseByCategoryProducts;
