import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext, CartProvider } from "../../Context/CartContext";
import { WishlistProvider } from "../../Context/WishlistContext";
import DetailedProduct from "../DetailedProduct";
import "@testing-library/jest-dom";

describe("DetailedProduct Component", () => {
  test("renders the product details correctly", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct />
        </WishlistProvider>
      </CartProvider>,
    );

    expect(screen.getByTestId("ProductTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ProductPrice")).toBeInTheDocument();
    expect(screen.getByTestId("ProductDescription")).toBeInTheDocument();
  });

  test("allows selecting a color", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct />
        </WishlistProvider>
      </CartProvider>,
    );

    // Select a color (blue in this case)
    const blueColorOption = screen.getAllByRole("radio")[0];
    fireEvent.click(blueColorOption);
    expect(blueColorOption).toBeChecked();
  });

  test("increases and decreases the quantity", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct />
        </WishlistProvider>
      </CartProvider>,
    );

    const decrementButton = screen.getByTestId("Dec_Qty");
    const incrementButton = screen.getByTestId("Inc_Qty");
    const quantityDisplay = screen.getByTestId("Qty");
    expect(quantityDisplay).toHaveTextContent("1");

    fireEvent.click(incrementButton);
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("calls addToCart", () => {
    const mockAddToCart = jest.fn();

    render(
      <CartContext.Provider
        value={{
          addToCart: mockAddToCart,
          cartItems: [],
          updateQuantity() {},
          removeFromCart() {},
        }}
      >
        <WishlistProvider>
          <DetailedProduct />
        </WishlistProvider>
      </CartContext.Provider>,
    );

    const buyNowButton = screen.getByText(/Buy Now/i);
    fireEvent.click(buyNowButton);
    expect(mockAddToCart).toHaveBeenCalled();
  });
});
