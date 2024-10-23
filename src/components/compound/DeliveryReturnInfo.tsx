import React from "react";
import DeliveryIcon from "../../assets/icon-delivery.svg";
import ReturnIcon from "../../assets/Icon-return.svg";

const DeliveryReturnInfo: React.FC = () => (
  <div className="mt-10">
    <div className="border border-black border-opacity-50 pl-5 flex items-center gap-5 rounded-t py-4">
      <div>
        <img src={DeliveryIcon} alt="Free Delivery" />
      </div>
      <div>
        <h3 className="font-medium mb-2">Free Delivery</h3>
        <p className="text-sm underline font-medium">
          Enter your postal code for Delivery Availability
        </p>
      </div>
    </div>
    <div className="border border-t-0  pl-5  border-black border-opacity-50 flex items-center gap-5 py-4 rounded-b">
      <div>
        <img src={ReturnIcon} alt="Return Delivery" />
      </div>
      <div>
        <h3 className="font-medium mb-2">Return Delivery</h3>
        <p className="text-sm font-medium">
          Free 30 Days Delivery Returns.{" "}
          <span className="underline">Details</span>
        </p>
      </div>
    </div>
  </div>
);

export default DeliveryReturnInfo;
