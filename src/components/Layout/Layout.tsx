import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../complex/Header";
import Footer from "../complex/Footer";
import ScrollToTop from "../compound/ScrollTop";

const Layout: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
