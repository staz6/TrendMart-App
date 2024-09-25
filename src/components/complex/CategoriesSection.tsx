import React from "react";

import { IoIosPhonePortrait } from "react-icons/io";
import CategoriesItem from "../compound/CategoriesItem";
import Section from "./Section";

export const CategoriesSection: React.FC = () => {
  return (
    <Section
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
      {Array.from({ length: 8 }).map((_, index) => (
        <CategoriesItem key={index} icon={<IoIosPhonePortrait size={50} />} />
      ))}
    </Section>
  );
};
