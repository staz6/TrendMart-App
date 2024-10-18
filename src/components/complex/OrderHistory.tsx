import React, { useEffect, useState } from "react";

interface OrderItem {
  title: string;
  price: number;
  qty: number;
}

interface OrderDetails {
  cartItems: OrderItem[];
  paymentMethod: "Bank" | "CashOnDelivery";
  subtotal: number;
  shippingFee: number;
  total: number;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<OrderDetails | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("order");
    if (savedOrder) {
      setOrders(JSON.parse(savedOrder));
    }
  }, []);

  if (!orders) {
    return (
      <p className="text-center text-gray-600 mt-8">
        No order history available
      </p>
    );
  }

  return (
    <div className=" lg:col-span-8 w-full text-black mx-auto px-4 font-poppins">
      <h2 className="text-3xl font-medium mb-4 text-center">Order History</h2>

      <div className="border rounded-lg shadow-CustomBoxShadow p-6 bg-white">
        <h3 className="text-xl font-medium mb-4">Order Summary</h3>

        {orders.cartItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-gray-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
              <div>
                <p className="font-medium ">{item.title}</p>
                <p className="text-sm text-gray-500">Quantity: {item.qty}</p>
              </div>
            </div>
            <p className="text-lg font-medium">${item.price * item.qty}</p>
          </div>
        ))}

        <div className="flex justify-between py-1 mt-4">
          <span className="text-lg font-medium">Subtotal:</span>
          <span className="text-lg">${orders.subtotal}</span>
        </div>

        <div className="flex justify-between ">
          <span className="text-lg font-medium">Shipping:</span>
          <span className="text-lg">
            {orders.shippingFee === 0 ? "Free" : `$${orders.shippingFee}`}
          </span>
        </div>

        <div className="flex justify-between py-3 font-semibold border-t border-gray-200 mt-4">
          <span className="text-xl">Total:</span>
          <span className="text-xl">${orders.total}</span>
        </div>

        <div className="">
          <p className="text-md">Payment Method: {orders.paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
