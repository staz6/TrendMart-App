import React, { useState } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import SearchIcon from "../../assets/SearchIcon.svg";

const Searchbar: React.FC = () => {
  const [SearchProduct, setSearchProduct] = useState<string>("");
  return (
    <div className="flex bg-secondary py-2 px-5 rounded-md">
      <Input
        placeholder="What are you looking for?"
        value={SearchProduct}
        onChange={setSearchProduct}
        className="font-poppins w-[13.5rem] bg-transparent outline-none  placeholder:text-sm placeholder:text-black placeholder:opacity-50"
        onClick={() => {}}
        type="string"
      />
      <Button className="" onClick={() => {}} icon="" description="">
        <img className="w-5 h-5" src={SearchIcon} alt="" />
      </Button>
    </div>
  );
};

export default Searchbar;
