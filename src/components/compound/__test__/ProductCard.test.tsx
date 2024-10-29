import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import "@testing-library/jest-dom";
import { v4 as uuidv4 } from "uuid";
import { WishlistContext } from "../../Context/WishlistContext";
import { CartContext } from "../../Context/CartContext";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard Component", () => {
  const setup = () => {
    const mockAddToCart = jest.fn();
    const mockWishlist = jest.fn();
    const mockViewDetails = jest.fn();

    render(
      <CartContext.Provider
        value={{
          setCartItems() {},
          addToCart: mockAddToCart,
          cartItems: [],
          removeFromCart() {},
          updateQuantity() {},
        }}
      >
        <WishlistContext.Provider
          value={{
            addToWishlist: mockWishlist,
            wishlistItems: [],
            removeFromWishlist() {},
            moveAllToCart() {},
          }}
        >
          <MemoryRouter>
            <ProductCard
              id={uuidv4()}
              image="path/to/image.jpg"
              title="Test Product"
              price={100}
              discount={20}
              rating={3}
              New={false}
            />
          </MemoryRouter>
        </WishlistContext.Provider>
      </CartContext.Provider>,
    );

    return { mockAddToCart, mockWishlist, mockViewDetails };
  };

  it("renders correctly with props", () => {
    setup();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("(3.0)")).toBeInTheDocument();
    expect(screen.getByText("-20%")).toBeInTheDocument();
  });

  it("handles button clicks correctly", () => {
    const { mockAddToCart, mockWishlist } = setup();
    const productCardImage = screen.getByAltText("Test Product");
    fireEvent.mouseEnter(productCardImage);
    const addToCartButton = screen.getByText("Add To Cart");
    fireEvent.click(addToCartButton);
    expect(mockAddToCart).toHaveBeenCalled();
    const wishList = screen.getByTestId("wishList");
    fireEvent.click(wishList);
    expect(mockWishlist).toHaveBeenCalled();
  });
});
