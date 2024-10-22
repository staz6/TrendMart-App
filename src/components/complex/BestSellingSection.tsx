import React from "react";
import Section from "./Section";
import ProductCard from "../compound/ProductCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./ProductOfCategory";
import SkeletonLoader from "../compound/SkeletonLoader";

type SectionProps = {
  slider?: boolean;
};

const BestSellingSection: React.FC<SectionProps> = ({ slider = true }) => {
  const fetchBestSellingProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>(
      "https://fakestoreapi.com/products?limit=15",
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["SalesProducts"],
    queryFn: fetchBestSellingProducts,
  });
  return (
    <Section
      showTimer={false}
      sectionTitle="This Month"
      showPagination
      sliderTitle="Best Selling Products"
      testId="BestSellingProducts"
      slider={slider}
    >
      {isLoading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <SkeletonLoader key={index}>
            <div
              data-testid="ProductSkeleton"
              className="h-72 w-72   border bg-gray-300"
            />
          </SkeletonLoader>
        ))
      ) : error ? (
        <p className="text-2xl text-button2">Error loading products.</p>
      ) : (
        data?.map((product) => (
          <ProductCard
            key={product.id}
            id={`${product.id}`}
            image={product.image}
            title={product.title}
            price={product.price}
            discount={0}
            rating={product.rating.rate}
          />
        ))
      )}
    </Section>
  );
};

export default BestSellingSection;
