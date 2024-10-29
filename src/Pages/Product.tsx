import React from "react";
import Wrapper from "../components/compound/Wrapper";
import { Link, useParams } from "react-router-dom";
import DetailedProduct from "../components/complex/DetailedProduct";
import RelatedItem from "../components/complex/RelatedItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { mockProducts } from "../mockProductData";

export interface ProductType {
  id: number | string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating: {
    rate: number;
    count: number;
  };
}

type ParamsType = {
  Id: string;
};

const Product: React.FC = () => {
  const { Id } = useParams<ParamsType>();
  const isIdNumber = !isNaN(Number(Id));
  const fetchDetailedProduct = async (): Promise<ProductType> => {
    const { data } = await axios.get<ProductType>(
      `https://fakestoreapi.com/products/${Id}`,
    );
    return data;
  };

  const { data, isLoading, error } = useQuery<ProductType>({
    queryKey: ["DetailedProduct", Id],
    queryFn: fetchDetailedProduct,
    enabled: isIdNumber,
  });
  const mockProduct = !isIdNumber
    ? mockProducts.find((product) => product.id.toString() === Id)
    : undefined;
  if (error) {
    return (
      <p className="text-center text-2xl text-button2">Error Loading Product</p>
    );
  }
  const productData = isIdNumber ? data : mockProduct;
  return (
    <Wrapper>
      <h1
        data-testid="PageDirectory"
        className="text-black text-opacity-50 my-16"
      >
        <Link to="/MyAccount/Profile">Account</Link>
        <span> / </span>
        <span>Gaming</span>
        <span> / </span>
        <span className="text-black">ProductName</span>
      </h1>

      <div className="grid gap-5 lg:h-auto mb-10 grid-cols-12">
        <div
          data-testid="ProductSideImages"
          className="col-span-12 lg:col-span-2 flex order-last lg:order-1 lg:flex-col xl:px-5 justify-between lg:h-[35rem]"
        >
          {Array(4)
            .fill(null)
            .map((_, idx) => (
              <div
                key={idx}
                className="h-16 w-16 sm:w-32 sm:h-32 flex items-center justify-center bg-secondary"
              >
                {isLoading ? (
                  <div className="bg-gray-300" />
                ) : (
                  <img
                    className="w-[90%] h-[90%]"
                    src={productData?.image}
                    alt={`Product ${idx}`}
                  />
                )}
              </div>
            ))}
        </div>
        <div
          data-testid="MainProductImage"
          className="col-span-12 md:col-span-6 order-1 lg:order-2 lg:col-span-5 border bg-secondary flex items-center justify-center"
        >
          {isLoading ? (
            <div className="bg-gray-300" />
          ) : (
            <img
              src={productData?.image}
              className="h-96 sm:h-[30rem]"
              alt="Main Product"
            />
          )}
        </div>
        <div
          data-testid="DetailedProductSection"
          className="col-span-12 md:col-span-6 order-2 lg:order-3 lg:col-span-5"
        >
          <DetailedProduct
            data={productData}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
      <RelatedItem category={productData?.category} />
    </Wrapper>
  );
};

export default Product;
