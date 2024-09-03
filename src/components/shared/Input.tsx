import React from "react";

export interface InputProps<T> {
  type: string;
  placeholder: string;
  value: T;
  onChange: (value: T) => void;
  className: string;
  onClick: () => void;
}

const Input = <T extends string | number | readonly string[] | undefined>({
  type,
  placeholder,
  value,
  onChange,
  className,
  onClick,
}: InputProps<T>): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange(e.target.value as T);
  };

  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      onClick={onClick}
    />
  );
};

export default Input;
