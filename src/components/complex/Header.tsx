import React from "react";
import Button from "../shared/Button";
import Searchbar from "../compound/Searchbar";
import Heart from "../../assets/WishListIcon.svg";
import Cart from "../../assets/Cart.svg";
export const Header: React.FC = () => {
  return (
    <div className="w-full  margin-auto lg:px-[5%] xl:px-32 pt-10 pb-5 border border-b-black border-opacity-30 shadow-sm">
      <div className="flex text-text2 justify-between items-center">
        <a
          href=""
          className="text-2xl font-extrabold tracking-wider font-inter"
        >
          Exclusive
        </a>
        <div className="flex gap-5 xl:gap-10 text-md font-medium font-poppins">
          <a href="" className="border-b border-b-black">
            Home
          </a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Sign Up</a>
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
