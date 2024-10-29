import React, { forwardRef } from "react";

export interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode | null;
  className: string;
  description: string;
  children?: React.ReactNode;
  testid?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      icon,
      className = "",
      description = "",
      children = null,
      testid = "",
    },
    ref,
  ) => (
    <button
      type="button"
      className={className}
      data-testid={testid}
      onClick={onClick}
      ref={ref}
    >
      {description && <span>{description}</span>} {icon}
      {children}
    </button>
  ),
);

export default Button;
