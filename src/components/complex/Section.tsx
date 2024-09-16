import React, { ReactNode, useRef } from "react";
import CountdownTimer from "../compound/CountDownTimer";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../compound/SectionTitle";
import SectionSliderControls from "./../compound/SectionSliderControls";
import SectionSliderContent from "../compound/SectionSliderContent";

interface SectionProps {
  children: ReactNode[];
  sectionTitle: string;
  sliderTitle: string;
  showTimer: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  sectionTitle,
  sliderTitle,
  showTimer,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="xl:pl-32 px-10 margin-auto lg:px-[5%] mt-20 mb-20 ">
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
    </div>
  );
};

export default Section;
