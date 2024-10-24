import React from "react";
import { NavLink } from "react-router-dom";

interface CategoriesItemProps {
  icon: React.ReactNode;
  name: string;
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({ icon, name }) => {
  return (
    <NavLink
      to={`/BrowseByCategory/${name}`}
      className={({ isActive }) =>
        `${isActive ? "bg-button2 text-white" : ""} w-40 flex flex-col items-center justify-center font-poppins h-36 hover:text-white duration-200 text-text2 hover:bg-button2 border border-black border-opacity-30 rounded-sm mb-20`
      }
    >
      <span className="flex pb-2 justify-center">{icon}</span>
      <span>{name}</span>
    </NavLink>
  );
};

export default CategoriesItem;
