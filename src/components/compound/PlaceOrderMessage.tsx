import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

export const PlaceOrderMessage: React.FC = () => {
  return (
    <Wrapper>
      <div className="shadow-CustomBoxShadow mx-auto my-20 w-fit text-black font-poppins px-4 sm:px-10 py-10">
        <h1 className=" text-lg sm:text-2xl mb-5 text-center">
          Order Placed Successfully
        </h1>
        <div className="flex justify-between text-sm sm:text-base gap-5">
          <h1>To Continue Shopping -&gt; </h1>
          <Link className="font-semibold hover:text-button2" to="/">
            To Shop
          </Link>
        </div>
        <div className="flex justify-between text-sm sm:text-base gap-5">
          <h1>Track Your Order -&gt; </h1>
          <Link
            className="font-semibold hover:text-button2"
            to="/MyAccount/OrderHistory"
          >
            Order History
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
