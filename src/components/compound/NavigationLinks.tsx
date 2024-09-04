import React from "react";
import { NavLink } from "react-router-dom";

const NavigationLinks: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 xl:gap-10 text-md font-medium font-poppins">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `border-b-2 ${isActive ? "border-black" : "border-transparent"} hover:border-black hover:shadow-md transition-all duration-300 `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `border-b-2 ${isActive ? "border-black" : "border-transparent"} hover:border-black hover:shadow-md transition-all duration-300 `
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) =>
          `border-b-2 ${isActive ? "border-black" : "border-transparent"} hover:border-black hover:shadow-md transition-all duration-300 `
        }
      >
        About
      </NavLink>
      <NavLink
        to="/Sign_Up"
        className={({ isActive }) =>
          `border-b-2 ${isActive ? "border-black" : "border-transparent"} hover:border-black hover:shadow-md transition-all duration-300 `
        }
      >
        Sign Up
      </NavLink>
    </div>
  );
};

export default NavigationLinks;
