import React, { useState } from "react";
import Button from "../shared/Button";
import { useCart } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/UserAuthContext";
import Coupon from "../compound/Coupon";

const MiniCheckoutCart: React.FC = () => {
  const { cartItems } = useCart();
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate("/Sign_Up");
      window.alert("You are not signed in. Please sign in to continue.");
    } else {
      navigate("Checkout");
    }
  };
  const initialSubtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const initialShipping = initialSubtotal > 1000 ? 0 : 50;
  const initialTotal = initialSubtotal + initialShipping;
  const [checkout, setCheckout] = useState({
    subtotal: initialSubtotal,
    shipping: initialShipping,
    total: initialTotal,
  });
  const calculateCheckoutTotals = () => {
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0,
    );
    const shipping = subtotal > 1000 ? 0 : 50;
    const total = subtotal + shipping;

    setCheckout({
      subtotal,
      shipping,
      total,
    });
  };
  return (
    <div data-testid="MiniCheckoutCart">
      <div className="flex flex-col sm:flex-row gap-5 sm:justify-between mb-10">
        <Link
          className="flex  justify-center items-center text-black hover:bg-black hover:text-white transition-all duration-200"
          to="/"
        >
          <h1 className=" border w-full sm:w-fit text-center rounded-[0.25rem] border-black px-8 py-3 font-medium font-poppins">
            Return To Shop
          </h1>
        </Link>
        {cartItems.length && (
          <Button
            onClick={() => {
              calculateCheckoutTotals();
            }}
            icon=""
            description="Update Cart"
            className="text-black hover:bg-black hover:text-white transition-all duration-200 border rounded-[0.25rem] border-black px-8 py-3 font-medium font-poppins"
          />
        )}
      </div>
      {cartItems.length ? (
        <div className="flex flex-col  md:flex-row  justify-between mb-10">
          <Coupon />

          <div className="border-2 rounded-[0.25rem] mt-10 md:mt-0 font-poppins text-black border-black py-6 px-6 sm:w-96">
            <h1 className="font-medium mb-4 text-lg">Cart Total</h1>
            <div className="flex justify-between ">
              <span>Subtotal:</span>
              <span>${checkout.subtotal}</span>
            </div>
            <hr className="border border-black border-opacity-35 my-2" />
            <div className="flex justify-between ">
              <span>Shipping:</span>
              <span>{checkout.shipping ? checkout.shipping : "Free"}</span>
            </div>
            <hr className="border border-black border-opacity-35 my-2" />
            <div className="flex justify-between ">
              <span>Total:</span>
              <span>${checkout.total}</span>
            </div>
            <div className="flex justify-center mt-5">
              <Button
                className="capital bg-button2 text-white font-medium px-10 p-3 rounded-[0.25rem] hover:bg-transparent hover:text-button2 border transition-all duration-300 border-button2 "
                onClick={handleCheckout}
                icon=""
                testid="paginationProductsSection"
                description="Proceed To Checkout"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="sm:w-96 m-auto shadow-CustomBoxShadow py-10 mb-10 ">
          <h1 className="text-2xl text-center text-black m-auto font-poppins">
            No Items In The Cart
          </h1>
        </div>
      )}
    </div>
  );
};

export default MiniCheckoutCart;
