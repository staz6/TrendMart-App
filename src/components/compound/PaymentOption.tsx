import React from "react";

interface PaymentOptionProps {
  label: string;
  value: "Bank" | "CashOnDelivery";
  selectedValue: "Bank" | "CashOnDelivery";
  onChange: (value: "Bank" | "CashOnDelivery") => void;
}

export const PaymentOption: React.FC<PaymentOptionProps> = ({
  label,
  value,
  selectedValue,
  onChange,
}) => (
  <div className="flex gap-4 items-center">
    <input
      className="h-5 w-5 appearance-none checked:appearance-auto checked:accent-black border rounded-full border-black bg-white"
      type="radio"
      checked={selectedValue === value}
      onChange={() => onChange(value)}
    />
    <span>{label}</span>
  </div>
);
