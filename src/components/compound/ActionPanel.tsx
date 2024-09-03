import React from "react";
import Button from "../shared/Button";
import Heart from "../../assets/WishListIcon.svg";
import Cart from "../../assets/Cart.svg";
import Searchbar from "./Searchbar";

const ActionPanel: React.FC = () => {
  return (
    <div className="hidden lg:flex gap-5">
      <Searchbar />
      <Button className="ml-2" onClick={() => {}} icon="" description="">
        <img className="w-6 h-6" src={Heart} alt="" />
      </Button>
      <Button className="" onClick={() => {}} icon="" description="">
        <img className="w-8 h-8" src={Cart} alt="" />
      </Button>
    </div>
  );
};

export default ActionPanel;
