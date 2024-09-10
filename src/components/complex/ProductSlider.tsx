import React, { ReactNode, useState } from "react";

import "./ProductSlider.css";
import CountdownTimer from "../compound/CountDownTimer";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Button from "../shared/Button";

interface ProductSliderProps {
  children: ReactNode[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slideNext = () => {
    setActiveIndex((val) => {
      if (val >= children.length - 1) {
        return 0;
      } else {
        return val + 1;
      }
    });
  };

  const slidePrev = () => {
    setActiveIndex((val) => {
      if (val <= 0) {
        return children.length - 1;
      } else {
        return val - 1;
      }
    });
  };

  return (
    <div className="xl:pl-32 px-10  margin-auto lg:px-[5%] mt-20 mb-20 ">
      <div className="text-button2 flex items-center gap-4">
        <div className="px-2 py-4 bg-button2 rounded-[0.25rem]"></div>
        <h1 className="font-semibold font-poppins text-sm">Today's</h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <div className="flex sm:flex-row flex-col items-end text-text2 gap-20 ">
          <h1 className="capital  font-semibold tracking-wide text-3xl  font-inter">
            Flash Sales
          </h1>
          <CountdownTimer />
        </div>
        <div className=" flex gap-4">
          <Button
            className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
            onClick={() => {
              slideNext();
            }}
            icon={<IoMdArrowBack size={28} />}
            description=""
          />
          <Button
            className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
            onClick={() => {
              slidePrev();
            }}
            icon={<IoMdArrowForward size={28} />}
            description=""
          />
        </div>
      </div>

      <div className="container__slider">
        {children.map((item, index) => {
          return (
            <div
              className={
                "slider__item slider__item-active-" + (activeIndex + 1)
              }
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
