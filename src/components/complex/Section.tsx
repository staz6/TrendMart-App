import React, { ReactNode, useRef } from "react";
import CountdownTimer from "../compound/CountDownTimer";
import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "../compound/SectionTitle";
import SectionSliderControls from "./../compound/SectionSliderControls";
import SectionSliderContent from "../compound/SectionSliderContent";
import Button from "../shared/Button";
import { useNavigate } from "react-router-dom";

interface SectionProps {
  children: ReactNode[] | ReactNode;
  sectionTitle: string;
  sliderTitle: string;
  showTimer: boolean;
  showPagination: boolean;
  testId?: string;
  spaceBetween?: number;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number;
    };
  };
  loop?: boolean;
  slider: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  sectionTitle,
  sliderTitle,
  showTimer,
  showPagination,
  spaceBetween = 10,
  slider = true,
  breakpoints = {
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    830: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
  loop = true,
  testId = "",
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  return (
    <div data-testid={testId} className=" margin-auto mt-20 ">
      <SectionTitle title={sectionTitle} />
      <div className="flex sm:flex-row flex-col justify-between items-center mb-8">
        <div className="flex sm:flex-row my-5 md:mt-0 flex-col sm:items-end text-text2 gap-5 sm:gap-14 md:gap-20 ">
          <h1 className="capital font-semibold tracking-wide text-3xl font-inter">
            {sliderTitle}
          </h1>
          {showTimer ? <CountdownTimer /> : <div className="sm:mt-14"></div>}
        </div>
        {slider && (
          <SectionSliderControls prevRef={prevRef} nextRef={nextRef} />
        )}
      </div>

      {slider ? (
        <SectionSliderContent
          loop={loop}
          spaceBetween={spaceBetween}
          breakpoints={breakpoints}
          prevRef={prevRef}
          nextRef={nextRef}
        >
          {children}
        </SectionSliderContent>
      ) : (
        <div className="flex flex-wrap gap-9 justify-center sm:justify-normal">
          {children}
        </div>
      )}

      {showPagination && slider && (
        <div className="flex justify-center mt-8 mb-10">
          <Button
            className="capital bg-button2 px-10 p-3 rounded-[0.25rem] hover:bg-transparent hover:text-button2 border transition-all duration-300 border-button2 "
            onClick={() => navigate(`/${sliderTitle}`)}
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
