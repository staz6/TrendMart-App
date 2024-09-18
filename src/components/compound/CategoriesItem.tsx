import React from "react";
import Button from "../shared/Button";

interface CategoriesItemProps {
  icon: React.ReactNode;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ icon }) => {
  return (
    <Button
      className="w-40 font-poppins h-36 hover:text-white duration-200 text-text2 hover:bg-button2 border border-black border-opacity-30 rounded-sm mb-20"
      onClick={() => {}}
      icon=""
      testid=""
      description="Phones"
    >
      <span className="flex pb-2 justify-center">{icon}</span>
    </Button>
  );
};

export default CategoriesItem;
