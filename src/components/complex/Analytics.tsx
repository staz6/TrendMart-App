import React, { useState } from "react";
import { CiShop } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";

const statsArray = [
  {
    icon: <CiShop />,
    value: "10.5k",
    description: "Sellers active our site",
  },
  {
    icon: <HiOutlineCurrencyDollar />,
    value: "33k",
    description: "Monthly product sales",
  },
  {
    icon: <IoBagHandleOutline />,
    value: "45.5k",
    description: "Customers active in our site",
  },
  {
    icon: <TbMoneybag />,
    value: "25k",
    description: "Annual gross sales in our site",
  },
];

const Analytics: React.FC = () => {
  const [hover, setHover] = useState<number>(-1);

  return (
    <div
      data-testid="AnalyticsSection"
      className="flex md:flex-row flex-col items-center xl:gap-6 gap-4 2xl:gap-8 justify-center 2xl:px-0 px-6 mb-10"
    >
      {statsArray.map((stat, index) => (
        <div
          data-testid="AnalyticsCard"
          key={index}
          onMouseEnter={() => setHover(index)}
          onMouseLeave={() => setHover(-1)}
          className={`w-72 px-3 lg:px-6 py-6 xl:py-10 border text-center transition-colors duration-300 ease-in-out transform ${
            hover === index ? "bg-button2 text-white " : "text-black "
          }`}
        >
          <div
            className={`border-[0.6rem] lg:border-[0.8rem] w-fit m-auto rounded-full transition-colors duration-300 ease-in-out ${
              hover === index
                ? "border-white border-opacity-30"
                : "border-black border-opacity-20"
            }`}
          >
            <div
              className={`rounded-full text-4xl sm:text-3xl lg:text-4xl p-2 transition-colors duration-300 ease-in-out ${
                hover === index ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              {stat.icon}
            </div>
          </div>
          <h1 className="text-4xl sm:text-2xl lg:text-4xl mt-3 lg:mt-4 mb-2 font-inter font-bold transition-transform duration-300 ease-in-out">
            {stat.value}
          </h1>
          <h1 className="font-medium lg:text-base text-base sm:text-sm font-poppins">
            {stat.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
