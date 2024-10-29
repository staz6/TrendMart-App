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
          transition={{ duration: 0.1 }}
          className="bg-black bg-opacity-80 z-10 backdrop-blur-md pt-32 pb-12 lg:hidden text-center fixed will-change-transform w-full"
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
