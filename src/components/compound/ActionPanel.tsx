import React, { useState } from "react";
import Heart from "../../assets/WishListIcon.svg";
import Cart from "../../assets/Cart.svg";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { AnimatePresence, motion } from "framer-motion";
import { useWishlist } from "../Context/WishlistContext";
import { RiUserLine } from "react-icons/ri";
import { useAuthContext } from "../Context/UserAuthContext";
import Button from "../shared/Button";
import { PiShoppingBagOpen } from "react-icons/pi";
import { MdOutlineCancel } from "react-icons/md";
import { HiOutlineStar } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";

const ActionPanel: React.FC = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const [showDropdown, setShowDropdown] = useState(false);
  const { setisAuthenticated, isAuthenticated } = useAuthContext();
  console.log(cartItems);
  return (
    <div className="flex flex-col justify-center items-center lg:justify-normal lg:flex-row gap-5">
      <Searchbar />

      <Link
        className="relative hover:-translate-y-1 duration-200 transition-all"
        to="/Wishlist"
      >
        <img className="w-6 h-6" src={Heart} alt="Cart" />
        <AnimatePresence>
          {wishlistItems.length > 0 && (
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0 }}
              className="rounded-full  absolute -top-3 right-0 left-5 bg-button2  text-white w-6 h-6  flex items-center justify-center"
            >
              {wishlistItems.length}
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
      <Link
        className="relative hover:-translate-y-1 duration-200 transition-all"
        to="/Cart"
      >
        <img className="w-8 h-8" src={Cart} alt="Cart" />
        <AnimatePresence>
          {totalQuantity > 0 && (
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0 }}
              className="rounded-full  absolute -top-3 right-0 left-5 bg-button2  text-white w-6 h-6  flex items-center justify-center"
            >
              {totalQuantity}
            </motion.h1>
          )}
        </AnimatePresence>
      </Link>
      {isAuthenticated && (
        <div
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="relative "
        >
          <Link
            className={`relative block border-black rounded-full p-[0.35rem] ${showDropdown ? "bg-button2 text-white" : ""} duration-200 transition-all`}
            to="/MyAccount/Profile"
          >
            <RiUserLine size={24} />
          </Link>
          <AnimatePresence>
            {showDropdown && (
              <div className="h-56 w-60 absolute -right-2 ">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full bg-black gap-3 font-poppins  pl-5 pt-7 bg-opacity-20 flex flex-col  rounded-md backdrop-blur-3xl -right-2 mt-6  absolute text-white "
                >
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <RiUserLine size={26} />
                    <Link to="/MyAccount/Profile">Manage My Account</Link>
                  </div>
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <PiShoppingBagOpen size={27} />
                    <Link to="/MyAccount/OrderHistory">My Order</Link>
                  </div>{" "}
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <MdOutlineCancel size={27} />
                    <Link to="/MyAccount/Profile">My Cancellations</Link>
                  </div>{" "}
                  <div className="flex gap-4 hover:text-text2 transition-all duration-200">
                    <HiOutlineStar size={27} />
                    <Link to="/MyAccount/Profile">My Reviews</Link>
                  </div>{" "}
                  <Button
                    onClick={() => setisAuthenticated(false)}
                    description=""
                    className="flex gap-4 hover:text-text2 transition-all duration-200"
                    icon=""
                  >
                    <span>
                      <RiLogoutBoxLine size={27} />
                    </span>
                    <span>Logout</span>
                  </Button>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default ActionPanel;
