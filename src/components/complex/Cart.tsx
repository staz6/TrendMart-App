import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Button from "../shared/Button";
import { useCart } from "../Context/CartContext";

const Cart: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [removeBtn, showRemoveBtn] = useState<boolean>(false);
  return (
    <div data-testid="CartSection">
      {cartItems.length && (
        <motion.div className="pl-2 md:px-10 text-sm sm:text-base text-center py-4 shadow-CustomBoxShadow my-10 font-poppins text-black grid grid-cols-12 ">
          <h1 className="col-span-3">Product</h1>
          <h1 className="col-span-3">Price</h1>
          <h1 className="col-span-3">Quantity</h1>
          <h1 className="col-span-3">SubTotal</h1>
        </motion.div>
      )}
      <AnimatePresence>
        {cartItems.length &&
          cartItems.map((item) => (
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => showRemoveBtn(true)}
              onMouseLeave={() => showRemoveBtn(false)}
              key={item.id}
              className="md:px-10 pl-2 md:pl:0 text-center py-4 items-center shadow-CustomBoxShadow my-10 font-poppins text-black  grid grid-cols-12 justify-between"
            >
              <div className="col-span-3 text-sm sm:text-base relative m-auto flex flex-col sm:flex-row items-center gap-5">
                <img src={item.image} className="w-12 h-12" alt={item.title} />
                <h1>{item.title}</h1>
                <AnimatePresence>
                  {removeBtn && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1.1 }}
                      exit={{ scale: 0 }}
                      className="absolute -left-4 -top-2"
                    >
                      <Button
                        onClick={() => removeFromCart(item.id)}
                        icon={<RxCross2 size={16} />}
                        description=""
                        className=" p-0.5  text-white bg-button2  rounded-full "
                        testid="CartRemoveBtn"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <h1 className="col-span-3">${item.price}</h1>
              <div className="col-span-3">
                <div className="border w-fit m-auto border-black flex rounded-md items-center gap-2 py-1 px-3">
                  <span>{item.qty.toString().padStart(2, "0")}</span>
                  <div className="flex flex-col">
                    <Button
                      onClick={() => updateQuantity(item.id, 1)}
                      icon={<MdKeyboardArrowUp />}
                      description=""
                      className=""
                      testid="CartIncrementBtn"
                    />
                    <Button
                      onClick={() => updateQuantity(item.id, -1)}
                      icon={<MdKeyboardArrowDown />}
                      description=""
                      className=""
                      testid="CartDecrementBtn"
                    />
                  </div>
                </div>
              </div>
              <h1 className="col-span-3">
                ${(item.price * item.qty).toLocaleString()}
              </h1>{" "}
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default Cart;
