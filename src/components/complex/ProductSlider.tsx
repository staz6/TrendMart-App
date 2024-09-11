import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CountdownTimer from "../compound/CountDownTimer";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Button from "../shared/Button";
import "swiper/css";
import "swiper/css/navigation";

interface ProductSliderProps {
  children: ReactNode[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ children }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
            onClick={() => prevRef.current?.click()}
            icon={<IoMdArrowBack size={28} />}
            ref={prevRef}
            description=""
          />
          <Button
            className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
            onClick={() => nextRef.current?.click()}
            icon={<IoMdArrowForward size={28} />}
            ref={nextRef}
            description=""
          />
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            830: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onBeforeInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          className="flex"
        >
          {children.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              {item}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
