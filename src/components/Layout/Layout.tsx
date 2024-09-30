import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../complex/Header";
import Footer from "../complex/Footer";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
