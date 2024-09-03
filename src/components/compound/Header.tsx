import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { BiSearch } from "react-icons/bi";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

export const Header: React.FC = () => {
  return (
    <div className="w-full  margin-auto px-32 pt-10 pb-5 border border-b-black border-opacity-30 shadow-sm">
      <div className="flex text-text2 justify-between items-center">
        <a
          href=""
          className="text-2xl font-extrabold tracking-wider font-inter"
        >
          Exclusive
        </a>
        <div className="flex gap-10 text-md font-medium font-poppins">
          <a href="" className="border-b border-b-black">
            Home
          </a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">Sign Up</a>
        </div>
        <div className="flex gap-5">
          <div className="flex">
            <Input
              placeholder="What are you looking for?"
              value=""
              onChange={() => {}}
              className="bg-secondary font-poppins px-5 outline-none py-2 w-56 placeholder:text-sm placeholder:text-black placeholder:opacity-50 "
              onClick={() => {}}
              type="string"
            />
            <Button
              className="bg-secondary px-4"
              onClick={() => {}}
              icon={<BiSearch size={25} />}
              description=""
            />
          </div>
          <Button
            className="ml-2"
            onClick={() => {}}
            icon={<IoHeartOutline size={25} />}
            description=""
          />
          <Button
            className=""
            onClick={() => {}}
            icon={<IoCartOutline size={25} />}
            description=""
          />
        </div>
      </div>
    </div>
  );
};
