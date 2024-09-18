import React, { ReactNode, useRef } from "react";
import CountdownTimer from "../compound/CountDownTimer";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../compound/SectionTitle";
import SectionSliderControls from "./../compound/SectionSliderControls";
import SectionSliderContent from "../compound/SectionSliderContent";
import Button from "../shared/Button";

interface SectionProps {
  children: ReactNode[];
  sectionTitle: string;
  sliderTitle: string;
  showTimer: boolean;
  showPagination: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  sectionTitle,
  sliderTitle,
  showTimer,
  showPagination,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className=" margin-auto  ">
      <SectionTitle title={sectionTitle} />
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <div className="flex sm:flex-row my-5 md:mt-0 flex-col sm:items-end text-text2 gap-5 sm:gap-14 md:gap-20 ">
          <h1 className="capital font-semibold tracking-wide text-3xl font-inter">
            {sliderTitle}
          </h1>
          {showTimer && <CountdownTimer />}
        </div>
        <SectionSliderControls prevRef={prevRef} nextRef={nextRef} />
      </div>

      <SectionSliderContent prevRef={prevRef} nextRef={nextRef}>
        {children}
      </SectionSliderContent>
      {showPagination && (
        <div className="flex justify-center mt-14 mb-10">
          <Button
            className="capital bg-button2 px-10 p-3 rounded-[0.25rem] "
            onClick={() => {}}
            icon=""
            testid="paginationProductsSection"
            description="View All Products"
          />
        </div>
      )}
    </div>
  );
};

export default Section;