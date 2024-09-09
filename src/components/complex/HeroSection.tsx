import React from "react";
import { NavLink } from "react-router-dom";
import CustomSlider from "./CustomSlider";

const HeroSection: React.FC = () => {
  return (
    <div className="w-full flex md:flex-row flex-col  h-fit font-poppins  m-auto">
      <div className="md:w-[30%] lg:w-[25%] pl-10  margin-auto lg:pl-[5%] xl:pl-32 text-black text-opacity-90 font-[500] border-r border-black border-opacity-30  flex flex-col justify-end gap-4">
        <NavLink to="/" className="mt-10">
          Women's Fashion
        </NavLink>
        <NavLink to="/">Men's Fashion</NavLink>
        <NavLink to="/">Electronics</NavLink>
        <NavLink to="/">Home & Lifestyle</NavLink>
        <NavLink to="/">Medicine</NavLink>
        <NavLink to="/">Sports & Outdoor</NavLink>
        <NavLink to="/">Sports & Outdoor</NavLink>
        <NavLink to="/">Sports & Outdoor</NavLink>
      </div>

      <div className="md:w-[70%] md:pl-10 flex flex-col justify-center xl:justify-end">
        <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto md:mx-0  mt-10">
          <CustomSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
