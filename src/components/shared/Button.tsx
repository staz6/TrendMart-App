import React from "react";

export interface ButtonProps {
  onClick: () => void;
  icon: React.ReactNode | null;
  className: string;
  description: string;
  children?: React.ReactNode;
  testid?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  icon,
  className = "",
  description = "",
  children = null,
  testid = "",
}) => (
  <button
    type="button"
    className={className}
    data-testid={testid}
    onClick={onClick}
  >
    {description && <span className="ml-2">{description}</span>} {icon}
    {children}
  </button>
);

export default Button;
