import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import HeroImage from "../../assets/HeroSlider.svg";

const HeroSlider: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet HeroSliderBullet",
        bulletActiveClass:
          "swiper-pagination-bullet-active ActiveHeroSliderBullet",
      }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img className="w-full " src={HeroImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroImage} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full " src={HeroImage} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroSlider;
