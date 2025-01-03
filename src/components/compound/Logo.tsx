import React from "react";
import { NavLink } from "react-router-dom";

const Logo: React.FC = () => {
  return (
    <NavLink
      to="/"
      className="text-2xl z-20 font-extrabold tracking-wider font-inter"
    >
      Exclusive
    </NavLink>
  );
};

export default Logo;
