import React from "react";
import Button from "../shared/Button";

interface Props {
  setOpenMenu: (openMenu: boolean) => void;
  openMenu: boolean;
}

const MobileNavButton: React.FC<Props> = ({ setOpenMenu, openMenu }) => {
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300`;
  return (
    <div className="flex-col z-20 lg:hidden ">
      <Button
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
        description=""
        className="flex flex-col h-fit w-fit  border-black rounded justify-center items-center group"
        icon=""
      >
        <div
          className={`${genericHamburgerLine} ${
            openMenu ? "rotate-45 translate-y-3  " : ""
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${openMenu ? "opacity-0" : " "}`}
        />
        <div
          className={`${genericHamburgerLine} ${
            openMenu ? "-rotate-45 -translate-y-3  " : " "
          }`}
        />
      </Button>
    </div>
  );
};

export default MobileNavButton;
