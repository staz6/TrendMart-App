import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <div className="text-button2 flex items-center gap-4">
    <div className="px-2 py-4 bg-button2 rounded-[0.25rem]"></div>
    <h1 className="font-semibold font-poppins text-sm">{title}</h1>
  </div>
);

export default SectionTitle;
