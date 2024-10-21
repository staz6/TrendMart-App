import React from "react";
import Wrapper from "../components/compound/Wrapper";
import { Link } from "react-router-dom";
import sideImage from "../assets/ProductSideImage.svg";
import DetailedProduct from "../components/complex/DetailedProduct";
import RelatedItem from "../components/complex/RelatedItem";

const Product: React.FC = () => {
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
        <div className="col-span-12 lg:col-span-2 flex order-last lg:order-1 lg:flex-col xl:px-5 justify-between lg:h-[35rem]">
          <div className="  h-16 w-16 sm:w-32 sm:h-32 flex items-center justify-center bg-secondary ">
            <img className=" " src={sideImage} alt="" />
          </div>
          <div className="  h-16 w-16 sm:w-32 sm:h-32 flex items-center justify-center bg-secondary ">
            <img className=" " src={sideImage} alt="" />
          </div>
          <div className=" h-16 w-16  sm:w-32 sm:h-32 flex items-center justify-center bg-secondary ">
            <img className=" " src={sideImage} alt="" />
          </div>
          <div className=" h-16 w-16  sm:w-32 sm:h-32 flex items-center justify-center bg-secondary ">
            <img className=" " src={sideImage} alt="" />
          </div>
        </div>
        <div className="col-span-12 md:col-span-6  order-1 lg:order-2 lg:col-span-5 border bg-secondary flex items-center justify-center">
          <img src={sideImage} className="h-96" alt="" />
        </div>
        <div className="col-span-12 md:col-span-6 order-2 lg:order-3 lg:col-span-5">
          <DetailedProduct />
        </div>
      </div>
      <RelatedItem />
    </Wrapper>
  );
};

export default Product;
