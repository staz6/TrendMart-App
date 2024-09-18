import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="px-10 lg:px-[5%] xl:px-32">{children}</div>;
};

export default Wrapper;
