import React, { useEffect, useState } from "react";
import NavigationLinks from "../compound/NavigationLinks";
import Logo from "../compound/Logo";
import ActionPanel from "../compound/ActionPanel";
import MobileNavButton from "../compound/MobileNavButton";
import MobileNav from "../compound/MobileNav";
import { useLocation } from "react-router-dom";

export const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [location.pathname]);
  return (
    <>
      <div className="w-full px-10 sticky z-50 bg-white top-0  margin-auto lg:px-[5%] xl:px-32 pt-10 pb-5 border border-b-black border-opacity-30 shadow-sm">
        <div className="flex text-text2 justify-between items-center relative">
          <Logo />
          <div className="hidden lg:flex">
            <NavigationLinks />
          </div>
          <div className="hidden lg:flex">
            <ActionPanel />
          </div>
          <MobileNavButton setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
      </div>
      <MobileNav openMenu={openMenu} />
    </>
  );
};
