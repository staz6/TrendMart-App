import React from "react";
import ProductCard from "../compound/ProductCard";
import Section from "./Section";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "./ProductOfCategory";
import SkeletonLoader from "../compound/SkeletonLoader";

type SectionProps = {
  slider?: boolean;
};

const ExploreOurProducts: React.FC<SectionProps> = ({ slider = true }) => {
  const fetchExploreOurProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get<Product[]>(
      "https://fakestoreapi.com/products?limit=10",
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["SalesProducts"],
    queryFn: fetchExploreOurProducts,
  });

  return (
    <Section
      showTimer={false}
      sectionTitle="Our Products"
      showPagination
      sliderTitle="Explore Our Products"
      testId="ExploreOurProducts"
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
            New
          />
        ))
      )}
    </Section>
  );
};

export default ExploreOurProducts;
