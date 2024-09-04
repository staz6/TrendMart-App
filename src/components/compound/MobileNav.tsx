import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ActionPanel from "./ActionPanel";
import NavigationLinks from "./NavigationLinks";

interface Props {
  openMenu: boolean;
}
const MobileNav: React.FC<Props> = ({ openMenu }) => {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.15, type: "Tween" }}
          className="bg-black bg-opacity-30 pt-28  lg:hidden text-center  absolute h-[30rem] top-0 left-0 right-0"
        >
          <div className="w-fit m-auto">
            <NavigationLinks />
          </div>
          <div className="mt-5">
            <ActionPanel />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
