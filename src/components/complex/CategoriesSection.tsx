import React from "react";
import {
  IoIosWatch,
  IoIosShirt,
  IoIosWoman,
  IoIosCloseCircle,
} from "react-icons/io";
import CategoriesItem from "../compound/CategoriesItem";
import Section from "./Section";
import { MdOutlineLaptopMac } from "react-icons/md";

type Category = {
  name: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export const CategoriesSection: React.FC = () => {
  const categoriesWithIcons: Category[] = [
    { name: "electronics", icon: <MdOutlineLaptopMac size={50} /> },
    { name: "jewelery", icon: <IoIosWatch size={50} /> },
    { name: "men's clothing", icon: <IoIosShirt size={50} /> },
    { name: "women's clothing", icon: <IoIosWoman size={50} /> },
    {
      name: "Coming Soon",
      icon: <IoIosCloseCircle size={50} />,
      disabled: true,
    },
    {
      name: "Coming Soon",
      icon: <IoIosCloseCircle size={50} />,
      disabled: true,
    },
  ];

  return (
    <Section
      slider
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 4 },
        830: { slidesPerView: 5 },
        1280: { slidesPerView: 6 },
      }}
      sectionTitle="Categories"
      sliderTitle="Browse By Category"
      showTimer={false}
      showPagination={false}
      testId="BrowseByCategory"
    >
      {categoriesWithIcons.map((category, index) => (
        <CategoriesItem name={category.name} icon={category.icon} key={index} />
      ))}
    </Section>
  );
};
