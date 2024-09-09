import React, { useState } from "react";
import productImage from "../../assets/productImage.png";
import { BiHeart } from "react-icons/bi";
import starfill from "../../assets/starfill.svg";
import { FiEye } from "react-icons/fi";
import Button from "../shared/Button";
import { AnimatePresence, motion } from "framer-motion";

const ProductCard: React.FC = () => {
  const [hover, sethover] = useState(false);
  return (
    <div className="w-72 h-72 text-text2 font-poppins">
      <div
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        className="bg-secondary relative flex justify-center p-5 py-12 overflow-y-hidden"
      >
        <h1 className="absolute top-3 left-3 bg-button2 text-secondary px-4 text-sm py-[0.35rem] rounded-[0.3rem]">
          -40%
        </h1>
        <div className="absolute flex flex-col top-3 right-3 ">
          <Button
            className="p-2 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
            onClick={() => {}}
            icon=""
            description=""
          >
            <BiHeart size={22} />
          </Button>
          <Button
            className="p-2 mt-2 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
            onClick={() => {}}
            icon=""
            description=""
          >
            <FiEye size={22} />
          </Button>
        </div>
        <AnimatePresence>
          {hover && (
            <motion.div
              className="w-full absolute bottom-0 left-0 "
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ y: 50 }}
            >
              <Button
                className="hover:bg-button2 transition-all duration-200 text-text py-2 bg-text2 w-full"
                onClick={() => {}}
                icon=""
                description="Add To Cart"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <img src={productImage} alt="" />
      </div>
      <h1 className="font-medium mt-4">HAVIT HV-G92 Gamepad</h1>

      <h1 className="mt-2 font-medium mb-2 text-button2">
        $120 <span className="text-text1 ml-2 line-through">$160</span>{" "}
      </h1>
      <div className="flex items-center gap-1">
        {[...Array(5)].map(() => (
          <img src={starfill} alt="" />
        ))}
        <span className="ml-2 text-sm text-gray-600">(4.0)</span>
      </div>
    </div>
  );
};

export default ProductCard;
