import { createContext, useContext, useState } from "react";

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "qty"> & { qty?: number }) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (id: string, change: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Omit<CartItem, "qty"> & { qty?: number }) => {
    const newItem: CartItem = { ...item, qty: item.qty ?? 1 };
    const existingItemIndex = cartItems.findIndex(
      (cartItem) =>
        cartItem.title === item.title && cartItem.price === item.price,
    );

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].qty += item.qty ?? 1;
      setCartItems(updatedItems);
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  const updateQuantity = (id: string, change: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(item.qty + change, 0) }
          : item,
      );
      return updatedItems.filter((item) => item.qty > 0);
    });
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
