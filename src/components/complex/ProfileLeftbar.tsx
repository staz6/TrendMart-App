import React from "react";
import { NavLink } from "react-router-dom";

const ProfileLeftbar: React.FC = () => {
  return (
    <div data-testid="ProfileLeftBar" className="lg:col-span-4 px-10 h-fit">
      <h2 className="text-lg font-medium">Manage My Account</h2>
      <NavLink
        to="/MyAccount/Profile"
        className={({ isActive }) =>
          (isActive ? "text-button2" : "text-gray-600") + " ml-8 mt-2"
        }
      >
        My Profile
      </NavLink>

      <h2 className="text-lg font-medium mt-4">My Orders</h2>
      <NavLink
        to="/MyAccount/OrderHistory"
        className={({ isActive }) =>
          (isActive ? "text-button2" : "text-gray-600") + " ml-8 mt-2"
        }
      >
        My Order History
      </NavLink>

      <h2 className="text-lg font-medium mt-4">My WishList</h2>
      <NavLink
        to="/Wishlist"
        className={({ isActive }) =>
          (isActive ? "text-button2" : "text-gray-600") + " ml-8 mt-2"
        }
      >
        My WishList
      </NavLink>
    </div>
  );
};

export default ProfileLeftbar;
