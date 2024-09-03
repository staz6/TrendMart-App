import React from "react";
import Button from "../shared/Button";
import Searchbar from "../compound/Searchbar";
import Heart from "../../assets/WishListIcon.svg";
import Cart from "../../assets/Cart.svg";
import { NavLink } from "react-router-dom";
export const Header: React.FC = () => {
  return (
    <div className="w-full  margin-auto lg:px-[5%] xl:px-32 pt-10 pb-5 border border-b-black border-opacity-30 shadow-sm">
      <div className="flex text-text2 justify-between items-center">
        <NavLink
          to="/"
          className="text-2xl font-extrabold tracking-wider font-inter"
        >
          Exclusive
        </NavLink>
        <div className="flex gap-5 xl:gap-10 text-md font-medium font-poppins">
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
        <div className="flex gap-5">
          <Searchbar />
          <Button className="ml-2" onClick={() => {}} icon="" description="">
            <img className="w-6 h-6" src={Heart} alt="" />
          </Button>
          <Button className="" onClick={() => {}} icon="" description="">
            <img className="w-8 h-8" src={Cart} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};
