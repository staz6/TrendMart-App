import React from "react";

interface TotalAmountProps {
  label: string;
  amount: string;
}

export const TotalAmount: React.FC<TotalAmountProps> = ({ label, amount }) => (
  <div className="flex justify-between mt-4">
    <h1>{label}</h1>
    <span>{amount}</span>
  </div>
);
