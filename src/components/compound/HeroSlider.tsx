import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { A11y, Pagination, Scrollbar } from "swiper/modules";
import HeroImage from "../../assets/Iphone 14.svg";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";

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
        <div className="flex bg-black h-80">
          <div className="w-96"></div>
          <div className="absolute sm:backdrop-blur-none backdrop-blur-sm font-poppins inset-0 flex gap-3 flex-col justify-center pl-16 ">
            <div className=" bg-opacity-50 gap-5 flex items-center text-white ">
              <FaApple size={50} />
              <span className="mt-1 font-[300]">iPhone 14 Series</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-[500] sm:leading-[3.8rem]">
              Up to 10% <br /> off Voucher
            </h1>
            <div className="flex gap-3 items-center">
              <Link
                to="/CustomProduct/Iphone14"
                className="border-b hover:text-opacity-50 text-white transition-all duration-200 w-fit pb-1"
              >
                Shop Now
              </Link>
              <span>
                <HiArrowRight size={25} />
              </span>
            </div>
          </div>
          <img src={HeroImage} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex bg-black h-80">
          <div className="w-96"></div>
          <div className="absolute sm:backdrop-blur-none backdrop-blur-sm font-poppins inset-0 flex gap-3 flex-col justify-center pl-16 ">
            <div className=" bg-opacity-50 gap-5 flex items-center text-white ">
              <FaApple size={50} />
              <span className="mt-1 font-[300]">iPhone 14 Series</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-[500] sm:leading-[3.8rem]">
              Up to 10% <br /> off Voucher
            </h1>
            <div className="flex gap-3 items-center">
              <Link
                to={""}
                className="border-b hover:text-opacity-50 text-white transition-all duration-200 w-fit pb-1"
              >
                Shop Now
              </Link>
              <span>
                <HiArrowRight size={25} />
              </span>
            </div>
          </div>
          <img src={HeroImage} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex bg-black h-80">
          <div className="w-96"></div>
          <div className="absolute sm:backdrop-blur-none backdrop-blur-sm font-poppins inset-0 flex gap-3 flex-col justify-center pl-16 ">
            <div className=" bg-opacity-50 gap-5 flex items-center text-white ">
              <FaApple size={50} />
              <span className="mt-1 font-[300]">iPhone 14 Series</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-[500] sm:leading-[3.8rem]">
              Up to 10% <br /> off Voucher
            </h1>
            <div className="flex gap-3 items-center">
              <Link
                to={""}
                className="border-b hover:text-opacity-50 text-white transition-all duration-200 w-fit pb-1"
              >
                Shop Now
              </Link>
              <span>
                <HiArrowRight size={25} />
              </span>
            </div>
          </div>
          <img src={HeroImage} alt="" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex bg-black h-80">
          <div className="w-96"></div>
          <div className="absolute sm:backdrop-blur-none sm:backdrop-blur-none backdrop-blur-sm font-poppins inset-0 flex gap-3 flex-col justify-center pl-16 ">
            <div className=" bg-opacity-50 gap-5 flex items-center text-white ">
              <FaApple size={50} />
              <span className="mt-1 font-[300]">iPhone 14 Series</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-[500] sm:leading-[3.8rem]">
              Up to 10% <br /> off Voucher
            </h1>
            <div className="flex gap-3 items-center">
              <Link
                to={""}
                className="border-b hover:text-opacity-50 text-white transition-all duration-200 w-fit pb-1"
              >
                Shop Now
              </Link>
              <span>
                <HiArrowRight size={25} />
              </span>
            </div>
          </div>
          <img src={HeroImage} alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroSlider;
