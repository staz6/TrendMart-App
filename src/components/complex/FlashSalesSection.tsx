import React from "react";
import ProductCard from "../compound/ProductCard";
import Section from "./Section";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SkeletonLoader from "../compound/SkeletonLoader";
import { ProductType } from "../../Pages/Product";

type SectionProps = {
  slider?: boolean;
};

const FlashSalesSection: React.FC<SectionProps> = ({ slider = true }) => {
  const fetchSalesProducts = async (): Promise<ProductType[]> => {
    const { data } = await axios.get<ProductType[]>(
      "https://fakestoreapi.com/products?limit=10",
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<ProductType[]>({
    queryKey: ["SalesProducts"],
    queryFn: fetchSalesProducts,
  });

  return (
    <Section
      sectionTitle="Today's"
      showPagination
      sliderTitle="Flash Sales"
      showTimer
      testId="FlashSales"
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
            discount={35}
            rating={product.rating.rate}
          />
        ))
      )}
    </Section>
  );
};

export default FlashSalesSection;
