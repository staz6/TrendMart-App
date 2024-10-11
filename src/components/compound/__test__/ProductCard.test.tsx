import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import "@testing-library/jest-dom";
import { v4 as uuidv4 } from "uuid";
import { WishlistProvider } from "../../Context/WishlistContext";
import { CartProvider } from "../../Context/CartContext";

describe("ProductCard Component", () => {
  const setup = () => {
    const mockAddToCart = jest.fn();
    const mockWishlist = jest.fn();
    const mockViewDetails = jest.fn();

    render(
      <CartProvider>
        <WishlistProvider>
          <ProductCard
            id={uuidv4()}
            image="path/to/image.jpg"
            title="Test Product"
            price={100}
            discount={20}
            rating={3}
            onAddToCart={mockAddToCart}
            onWishlist={mockWishlist}
            onViewDetails={mockViewDetails}
            New={false}
          />
        </WishlistProvider>
      </CartProvider>,
    );

    return { mockAddToCart, mockWishlist, mockViewDetails };
  };

  it("renders correctly with props", () => {
    setup();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("(3.0)")).toBeInTheDocument();
    expect(screen.getByText("-20%")).toBeInTheDocument();
  });

  it("handles button clicks correctly", () => {
    const { mockAddToCart, mockWishlist, mockViewDetails } = setup();
    const productCardImage = screen.getByAltText("Test Product");
    fireEvent.mouseEnter(productCardImage);
    const addToCartButton = screen.getByText("Add To Cart");
    fireEvent.click(addToCartButton);
    expect(mockAddToCart).toHaveBeenCalled();
    const wishList = screen.getByTestId("wishList");
    fireEvent.click(wishList);
    expect(mockWishlist).toHaveBeenCalled();
    const viewDetails = screen.getByTestId("viewDetails");
    fireEvent.click(viewDetails);
    expect(mockViewDetails).toHaveBeenCalled();
  });
});
