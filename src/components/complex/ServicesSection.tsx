import React from "react";
import ServicesTruck from "../../assets/ServicesTruck.svg";
import ServicesHeadphone from "../../assets/ServicesHeadphone.svg";
import ServicesCheckMark from "../../assets/ServicesCheckMark.svg";

const services = [
  {
    service: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    image: ServicesTruck,
  },
  {
    service: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    image: ServicesHeadphone,
  },
  {
    service: "MONEY BACK GUARANTEE",
    description: "We reurn money within 30 days",
    image: ServicesCheckMark,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div
      data-testid="ServiceSection"
      className="flex md:flex-row flex-col gap-10 md:gap-5 lg:gap-16 xl:gap-20 mb-10 h-fit text-text2 justify-center font-poppins"
    >
      {services.map((service, index) => (
        <div key={index} className="h-fit" data-testid="ServiceCard">
          <img
            src={service.image}
            className="md:w-[6rem] h-full m-auto"
            alt=""
          />
          <h1 className=" font-semibold text-center text-lg md:text-base lg:text-xl mt-5 md:mt-7">
            {service.service}
          </h1>
          <p className="  text-sm text-center mt-1 font-normal">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
