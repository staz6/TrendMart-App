import React, { RefObject } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Button from "../shared/Button";

interface SectionSliderControlsProps {
  prevRef: RefObject<HTMLButtonElement>;
  nextRef: RefObject<HTMLButtonElement>;
}

const SectionSliderControls: React.FC<SectionSliderControlsProps> = ({
  prevRef,
  nextRef,
}) => (
  <div className="flex gap-4">
    <Button
      className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
      onClick={() => prevRef.current?.click()}
      icon={<IoMdArrowBack size={28} />}
      ref={prevRef}
      description=""
    />
    <Button
      className="p-3 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white text-text2 bg-secondary1 rounded-full"
      onClick={() => nextRef.current?.click()}
      icon={<IoMdArrowForward size={28} />}
      ref={nextRef}
      description=""
    />
  </div>
);

export default SectionSliderControls;
