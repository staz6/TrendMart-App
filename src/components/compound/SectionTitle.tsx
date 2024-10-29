import React from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  className = "text-button2 text-sm font-semibold",
}) => (
  <div className={`flex items-center gap-4 font-poppins ${className}`}>
    <div className="px-2 py-4 bg-button2 rounded-[0.25rem]"></div>
    <h1>{title}</h1>
  </div>
);

export default SectionTitle;
