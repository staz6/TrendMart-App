import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../shared/Button";
import starfill from "../../assets/starfill.svg";
import starEmpty from "../../assets/starEmpty.svg";
import { useCart } from "../Context/CartContext";
import { IoTrashOutline } from "react-icons/io5";
import { useWishlist } from "../Context/WishlistContext";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: number;
  discount: number;
  rating: number;
  onAddToCart: () => void;
  onWishlist: () => void;
  onViewDetails: () => void;
  New?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
  discount,
  rating,
  New = false,
}) => {
  const [hover, setHover] = useState(false);
  const originalPrice = (price * (100 - discount)) / 100;
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { addToWishlist, wishlistItems, removeFromWishlist } = useWishlist();
  const inWishlist = wishlistItems.find((item) => item.id === id);
  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="w-72 h-auto text-text2 font-poppins">
      <div
        onClick={handleCardClick}
        data-testid="ProductCardImage"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="bg-secondary cursor-pointer relative flex justify-center p-5 py-12 overflow-y-hidden"
      >
        {discount != 0 && !New && (
          <h1 className="absolute top-3 left-3 bg-button2 text-secondary px-4 text-sm py-[0.35rem] rounded-[0.3rem]">
            -{discount}%
          </h1>
        )}
        {New && (
          <h1 className="absolute top-3 left-3 bg-button1 text-secondary px-4 text-sm py-[0.35rem] rounded-[0.3rem]">
            new
          </h1>
        )}
        <div className="absolute flex flex-col top-3 right-3">
          {!inWishlist ? (
            <>
              <Button
                testid="wishList"
                className="p-2 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
                onClick={() =>
                  addToWishlist({
                    id,
                    image,
                    title,
                    price,
                    discount,
                    rating,
                    New,
                  })
                }
                icon={<BiHeart size={22} />}
                description=""
              />
              <Button
                testid="viewDetails"
                className="p-2 mt-2 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
                onClick={() => {}}
                icon={<FiEye size={22} />}
                description=""
              />
            </>
          ) : (
            <Button
              testid="viewDetails"
              className="p-2 mt-2 hover:bg-button2 hover:scale-110 transition-all duration-300 hover:text-white bg-white rounded-full"
              onClick={() => removeFromWishlist(id)}
              icon={<IoTrashOutline size={24} />}
              description=""
            />
          )}
        </div>
        <AnimatePresence>
          {hover && (
            <motion.div
              className="w-full absolute bottom-0 left-0"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.2 }}
              exit={{ y: 50 }}
            >
              <Button
                className="hover:bg-button2 transition-all duration-200 text-text py-2 bg-text2 w-full"
                onClick={() =>
                  addToCart({ title: title, price: price, id: id })
                }
                icon=""
                description="Add To Cart"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <img src={image} alt={title} className="object-contain h-40" />
      </div>
      <h1 onClick={handleCardClick} className="font-medium mt-4 cursor-pointer">
        {title}
      </h1>
      <h1 className="mt-2 font-medium mb-2 text-button2">
        ${price}
        {discount != 0 && (
          <span className="text-text1 ml-2 line-through">${originalPrice}</span>
        )}
      </h1>
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          return rating < index + 1 ? (
            <img key={index} src={starEmpty} alt="Star" className="w-4 h-4" />
          ) : (
            <img key={index} src={starfill} alt="Star" className="w-4 h-4" />
          );
        })}
        <span className="ml-2 text-sm text-gray-600">({rating}.0)</span>
      </div>
    </div>
  );
};

export default ProductCard;
