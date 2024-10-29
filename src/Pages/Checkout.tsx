import React, { useState } from "react";
import Wrapper from "../components/compound/Wrapper";
import { Link } from "react-router-dom";
import CheckoutSection from "../components/complex/CheckoutSection";
import CheckoutForm from "../components/complex/CheckoutForm";

const Checkout: React.FC = () => {
  const [filledForm, setFilledForm] = useState(false);
  return (
    <Wrapper>
      <h1
        data-testid="PageDirectory"
        className="text-black text-opacity-50 my-16"
      >
        <Link to="/MyAccount/Profile">My Account</Link>
        <span> / </span> <Link to="/Cart">View Cart</Link>
        <span> / </span>
        <span className="text-black">About</span>
      </h1>
      <div className="lg:grid grid-cols-12 font-poppins text-black">
        <div data-testid="CheckoutForm" className="col-span-4 xl:col-span-5 ">
          <CheckoutForm setFilledForm={setFilledForm} />
        </div>
        <div className="col-span-1"></div>
        <div
          data-testid="CheckoutSection"
          className="col-span-7 xl:col-span-6 2xl:pl-10  "
        >
          <CheckoutSection filledForm={filledForm} />
        </div>
      </div>
    </Wrapper>
  );
};

export default Checkout;
