import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import HeroSlider from "../../assets/HeroSlider.svg";

const CustomSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="w-full " src={HeroSlider} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroSlider} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroSlider} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroSlider} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
export default CustomSlider;
