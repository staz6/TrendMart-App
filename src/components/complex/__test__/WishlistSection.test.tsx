import { render, screen, fireEvent } from "@testing-library/react";
import { useWishlist } from "../../Context/WishlistContext";
import "@testing-library/jest-dom";
import WishlistSection from "../WishlistSection";
import { CartProvider } from "../../Context/CartContext";

jest.mock("../../Context/WishlistContext", () => ({
  useWishlist: jest.fn(),
}));

describe("WishlistSection", () => {
  const mockMoveAllToCart = jest.fn();

  beforeEach(() => {
    (useWishlist as jest.Mock).mockReturnValue({
      wishlistItems: [
        {
          id: "1",
          title: "Product 1",
          price: 100,
          discount: 10,
          rating: 4.5,
          New: true,
        },
        {
          id: "2",
          title: "Product 2",
          price: 200,
          discount: 20,
          rating: 4.0,
          New: false,
        },
      ],
      moveAllToCart: mockMoveAllToCart,
    });
  });

  it("renders WishlistSection with correct number of wishlist items", () => {
    render(
      <CartProvider>
        <WishlistSection />
      </CartProvider>,
    );

    expect(screen.getByText(/Wishlist \(2\)/)).toBeInTheDocument();

    expect(screen.getByText(/Product 1/)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/)).toBeInTheDocument();
  });

  it("calls moveAllToCart when 'Move All To Bag' button is clicked", () => {
    render(
      <CartProvider>
        <WishlistSection />
      </CartProvider>,
    );

    const moveAllButton = screen.getByText(/Move All To Bag/);
    fireEvent.click(moveAllButton);

    expect(mockMoveAllToCart).toHaveBeenCalledTimes(1);
  });
});
