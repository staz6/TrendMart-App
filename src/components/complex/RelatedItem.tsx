import React from "react";
import SectionTitle from "./../compound/SectionTitle";
import ProductCard from "../compound/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ProductType } from "../../Pages/Product";
import SkeletonLoader from "../compound/SkeletonLoader";

type CategoryType = {
  category: string | undefined;
};

const RelatedItem: React.FC<CategoryType> = ({ category }) => {
  const fetchRelatedProducts = async (): Promise<ProductType[]> => {
    const { data } = await axios.get<ProductType[]>(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<ProductType[]>({
    queryKey: ["RelatedProducts", category],
    queryFn: fetchRelatedProducts,
  });

  if (error) {
    return (
      <p className="text-center text-2xl text-button2">Error Loading Product</p>
    );
  }

  return (
    <div>
      <SectionTitle title="Related Items" />
      <div className=" justify-center sm:justify-normal  margin-auto  mt-10 mb-10 flex flex-wrap gap-5 xl:gap-8">
        {isLoading && (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonLoader key={index}>
                <div
                  data-testid="CategoryProductSkeleton"
                  className="h-72 w-72 border bg-gray-300"
                />
              </SkeletonLoader>
            ))}
          </>
        )}
        {data?.map(
          (product, index) =>
            index < 4 && (
              <ProductCard
                key={product.id}
                id={`${product.id}`}
                image={product.image}
                title={product.title}
                price={product.price}
                discount={0}
                rating={product.rating.rate}
              />
            ),
        )}
      </div>
    </div>
  );
};

export default RelatedItem;
