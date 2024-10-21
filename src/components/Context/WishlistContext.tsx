import React, { createContext, useContext, useState } from "react";
import { useCart } from "../Context/CartContext";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  discount?: number;
  rating?: number;
  New: boolean;
}

interface WishlistContextType {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  moveAllToCart: () => void;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const { addToCart } = useCart();

  const addToWishlist = (product: Product) => {
    if (wishlistItems.find((item) => item.id === product.id)) {
      setWishlistItems((prevItems) =>
        prevItems.filter((item) => item.id !== product.id),
      );
      return;
    }
    setWishlistItems((prevItems) => [...prevItems, { ...product }]);
  };

  const removeFromWishlist = (id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const moveAllToCart = () => {
    wishlistItems.forEach((item) => addToCart(item));
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        moveAllToCart,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
