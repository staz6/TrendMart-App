import React from "react";
import HeroSlider from "../compound/HeroSlider";
import Categories from "../compound/Categories";

const HeroSection: React.FC = () => {
  return (
    <div
      data-testid="HeroSection"
      className="w-full justify-between flex md:flex-row flex-col  h-fit font-poppins  m-auto"
    >
      <div className="md:w-[30%] lg:w-[25%] mt-10 margin-auto font-[500] md:border-r border-black border-opacity-30  flex flex-col justify-end gap-4">
        <Categories />
      </div>

      <div className="md:w-[70%] md:pl-10 flex flex-col justify-center xl:justify-end">
        <div className="lg:w-[100%] md:w-[90%] w-[100%] mx-auto md:mx-0  mt-10">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
