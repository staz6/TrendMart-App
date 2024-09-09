import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../complex/Header";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Layout;
