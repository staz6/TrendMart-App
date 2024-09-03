import React from "react";
import NavigationLinks from "../compound/NavigationLinks";
import Logo from "../compound/Logo";
import ActionPanel from "../compound/ActionPanel";

export const Header: React.FC = () => {
  return (
    <div className="w-full  margin-auto lg:px-[5%] xl:px-32 pt-10 pb-5 border border-b-black border-opacity-30 shadow-sm">
      <div className="flex text-text2 justify-between items-center">
        <Logo />
        <NavigationLinks />
        <ActionPanel />
      </div>
    </div>
  );
};
