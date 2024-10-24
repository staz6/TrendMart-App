import React, { useState } from "react";
import Coupon from "../compound/Coupon";
import Button from "../shared/Button";
import productImage from "../../assets/productImage.png";
import card1 from "../../assets/BankCardImg1.svg";
import card2 from "../../assets/BankCardImg2.svg";
import card3 from "../../assets/BankCardImg3.svg";
import card4 from "../../assets/BankCardImg4.svg";
import { PaymentOption } from "../compound/PaymentOption";
import { ProductSummary } from "../compound/ProductSummary";
import { TotalAmount } from "../compound/TotalAmount";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

interface CheckoutSectionType {
  filledForm: boolean;
}

const CheckoutSection: React.FC<CheckoutSectionType> = ({ filledForm }) => {
  console.log(filledForm);
  const [selectedPayment, setSelectedPayment] = useState<
    "Bank" | "CashOnDelivery"
  >("Bank");
  const { cartItems, setCartItems } = useCart();
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );
  const shippingFee = subtotal > 1000 ? 0 : 50;
  const total = subtotal + shippingFee;
  const navigate = useNavigate();
  const handleOrder = () => {
    if (filledForm) {
      const orderDetails = {
        cartItems,
        paymentMethod: selectedPayment,
        subtotal,
        shippingFee,
        total,
      };

      localStorage.setItem("order", JSON.stringify(orderDetails));

      window.alert("Order placed successfully");
      setCartItems([]);
      navigate("OrderMessage");
    } else {
      window.alert("Please fill all the form fields");
    }
  };
  return (
    <div className=" mb-6 ">
      <div className="sm:w-96">
        {cartItems.map((item, index) => (
          <ProductSummary
            key={index}
            name="HAVIT HV-G92 Gamepad"
            price={`${item.price * item.qty}`}
            imageSrc={productImage}
          />
        ))}

        <TotalAmount label="Subtotal:" amount={`${subtotal}`} />
        <hr className="my-3 border border-black border-opacity-35" />
        <TotalAmount
          label="Shipping:"
          amount={`${shippingFee ? shippingFee : "Free"}`}
        />
        <hr className="my-3 border border-black border-opacity-35" />
        <TotalAmount label="Total:" amount={`${total}`} />

        <div className="mt-6 flex justify-between items-center">
          <PaymentOption
            label="Bank"
            value="Bank"
            selectedValue={selectedPayment}
            onChange={setSelectedPayment}
          />
          <div className="flex gap-2 ">
            <img className="sm:h-12 sm:w-12" src={card1} alt="Card 1" />
            <img className="sm:h-12 sm:w-12" src={card2} alt="Card 2" />
            <img className="sm:h-12 sm:w-12" src={card3} alt="Card 3" />
            <img className="sm:h-12 sm:w-12" src={card4} alt="Card 4" />
          </div>
        </div>

        <div className="mt-3 mb-6">
          <PaymentOption
            label="Cash On Delivery"
            value="CashOnDelivery"
            selectedValue={selectedPayment}
            onChange={setSelectedPayment}
          />
        </div>
      </div>
      <Coupon />
      <Button
        className="capital text-white mt-6 bg-button2 font-medium px-10 p-3 rounded-[0.25rem] hover:bg-transparent hover:text-button2 border transition-all duration-300 border-button2"
        onClick={handleOrder}
        icon=""
        testid="paginationProductsSection"
        description="Place Order"
      />
    </div>
  );
};

export default CheckoutSection;
