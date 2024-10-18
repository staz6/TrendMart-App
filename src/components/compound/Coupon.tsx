import React, { useState } from "react";
import Button from "../shared/Button";
import Input from "../shared/Input";

const Coupon: React.FC = () => {
  const [coupon, setCoupon] = useState<string>("");

  return (
    <div className="flex flex-col sm:flex-row text-white gap-4 h-fit">
      <Input
        value={coupon}
        onChange={(e) => setCoupon(e)}
        type="string"
        placeholder="Coupon Code"
        className="border bg-transparent text-black px-5 py-3 font-poppins sm:w-72 border-black rounded-[0.25rem]"
        onClick={() => {}}
      />
      <Button
        className="capital bg-button2 font-medium px-10 p-3 rounded-[0.25rem] hover:bg-transparent hover:text-button2 border transition-all duration-300 border-button2 "
        onClick={() => {}}
        icon=""
        testid="paginationProductsSection"
        description="Apply Coupon"
      />
    </div>
  );
};

export default Coupon;
