import React from "react";
import HeroSlider from "../../assets/HeroSlider.svg";
import { NavLink } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="w-4/5 h-fit font-poppins  m-auto">
      <div className="flex h-full">
        <div className="xl:w-[15rem] md:w-[22rem] lg:w-[17rem] text-black font-normal border-r border-black border-opacity-30  flex flex-col justify-end gap-4">
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
        <div className="flex-grow ">
          <div className="flex  flex-col justify-end h-full  ">
            <img className=" h-[20rem]  ml-10" src={HeroSlider} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
