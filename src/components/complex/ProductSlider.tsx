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
  const itemsToShow = 4;

  const duplicatedChildren = [
    ...children.slice(-itemsToShow),
    ...children,
    ...children.slice(0, itemsToShow),
  ];

  const slideNext = () => {
    if (activeIndex < children.length + itemsToShow - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    } else {
      setActiveIndex(itemsToShow);
    }
  };

  const slidePrev = () => {
    if (activeIndex > itemsToShow) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else {
      setActiveIndex(duplicatedChildren.length - itemsToShow - 1);
    }
  };

  return (
    <div className="xl:pl-32 px-10 margin-auto lg:px-[5%] mt-20 mb-20 ">
      <div className="text-button2 flex items-center gap-4">
        <div className="px-2 py-4 bg-button2 rounded-[0.25rem]"></div>
        <h1 className="font-semibold font-poppins text-sm">Today's</h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <div className="flex sm:flex-row flex-col items-end text-text2 gap-20 ">
          <h1 className="capital font-semibold tracking-wide text-3xl font-inter">
            Flash Sales
          </h1>
          <CountdownTimer />
        </div>
        <div className="flex gap-4">
          <Button
            className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
            onClick={slidePrev}
            icon={<IoMdArrowBack size={28} />}
            description=""
          />
          <Button
            className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
            onClick={slideNext}
            icon={<IoMdArrowForward size={28} />}
            description=""
          />
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${((activeIndex + itemsToShow) / duplicatedChildren.length) * 100}%)`,
          }}
        >
          {duplicatedChildren.map((item, index) => (
            <div key={index} className="flex-shrink-0 px-2">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
