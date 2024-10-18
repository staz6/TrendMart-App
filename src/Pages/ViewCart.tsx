import React from "react";
import Wrapper from "../components/compound/Wrapper";
import Cart from "../components/complex/Cart";
import { Link } from "react-router-dom";
import MiniCheckoutCart from "../components/complex/MiniCheckoutCart";

const ViewCart: React.FC = () => {
  return (
    <Wrapper>
      <h1
        data-testid="PageDirectory"
        className="text-black text-opacity-50 mt-10"
      >
        <Link to="/">Home</Link>
        <span> / </span>
        <span className="text-black">Cart</span>
      </h1>
      <Cart />
      <MiniCheckoutCart />
    </Wrapper>
  );
};

export default ViewCart;
