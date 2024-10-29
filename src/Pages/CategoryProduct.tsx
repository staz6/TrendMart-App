import React from "react";
import Wrapper from "../components/compound/Wrapper";
import Categories from "../components/compound/Categories";
import ProductOfCategory from "../components/complex/ProductOfCategory";

export const CategoryProduct: React.FC = () => {
  return (
    <Wrapper>
      <div className="mt-20 font-poppins text-black">
        <div className="grid sm:grid-cols-12">
          <div
            data-testid="CategoriesSection"
            className="flex mb-10 sm:mb-0 flex-col md:border-r border-black border-opacity-30 gap-4 col-span-3 xl:col-span-2"
          >
            <Categories />
          </div>
          <div
            data-testid="ProductsOFcategories"
            className="sm:justify-between justify-center gap-5 flex flex-wrap col-span-9 xl:col-span-10 sm:pl-8 mb-10"
          >
            <ProductOfCategory />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"></div>
      </div>
    </Wrapper>
  );
};

export default CategoryProduct;
