import React from "react";
import Button from "../shared/Button";
import Heart from "../../assets/WishListIcon.svg";
import Cart from "../../assets/Cart.svg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";

const ActionPanel: React.FC = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
  console.log(cartItems);
  return (
    <div className="flex flex-col justify-center items-center lg:justify-normal lg:flex-row gap-5">
      <Searchbar />
      <Button className="ml-2" onClick={() => {}} icon="" description="">
        <img className="w-6 h-6" src={Heart} alt="" />
      </Button>
      <Link
        className="relative hover:-translate-y-1 duration-200 transition-all"
        to="/Cart"
      >
        <img className="w-8 h-8" src={Cart} alt="Cart" />
        <AnimatePresence>
          {totalQuantity > 0 && (
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0 }}
              className="rounded-full  absolute -top-3 right-0 left-5 bg-button2  text-white w-6 h-6  flex items-center justify-center"
            >
              {totalQuantity}
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

export default ActionPanel;
