import React from "react";
import OurStoryImage from "../../assets/OurStoryImage.svg";

const OurStory: React.FC = () => {
  return (
    <div
      data-testid="OurStorySection"
      className="flex gap-7 mb-10 pl-10 lg:mt-0 mt-5 lg:pl-[5%] justify-between xl:pl-32  items-center"
    >
      <div className="text-black pr-10 sm:pr-0 sm:w-[65%] md:w-[40%]">
        <h1 className="xl:text-6xl text-5xl mb-10 tracking-wider font-semibold font-inter">
          Our Story{" "}
        </h1>
        <p className="mb-5 xl:text-base text-sm font-poppins ">
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
        </p>
        <p className="xl:text-base text-sm font-poppins">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <img className="w-[55%] hidden md:block" src={OurStoryImage} alt="" />
    </div>
  );
};

export default OurStory;
