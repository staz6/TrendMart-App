import { render, screen, fireEvent } from "@testing-library/react";
import { CartContext, CartProvider } from "../../Context/CartContext";
import { WishlistProvider } from "../../Context/WishlistContext";
import DetailedProduct from "../DetailedProduct";
import "@testing-library/jest-dom";

const mockProductData = {
  id: 1,
  title: "Test Product",
  price: 100,
  category: "Test",
  image: "testImage",
  description: "This is a test product",
  rating: { rate: 4.5, count: 10 },
};

describe("DetailedProduct Component", () => {
  test("renders loading skeleton when isLoading is true", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct data={undefined} isLoading={true} error={null} />
        </WishlistProvider>
      </CartProvider>,
    );

    expect(screen.getByTestId("ProductTitleSkeleton")).toBeInTheDocument();
  });

  test("displays error message when error occurs", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct data={undefined} isLoading={false} error={"Error"} />
        </WishlistProvider>
      </CartProvider>,
    );

    expect(screen.getByText("Error Loading Product")).toBeInTheDocument();
  });

  test("renders the product details correctly", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct
            data={mockProductData}
            isLoading={false}
            error={null}
          />
        </WishlistProvider>
      </CartProvider>,
    );

    expect(screen.getByTestId("ProductTitle")).toHaveTextContent(
      "Test Product",
    );
    expect(screen.getByTestId("ProductPrice")).toHaveTextContent("$100");
    expect(screen.getByTestId("ProductDescription")).toHaveTextContent(
      "This is a test product",
    );
  });

  test("allows selecting a color", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct
            data={mockProductData}
            isLoading={false}
            error={null}
          />
        </WishlistProvider>
      </CartProvider>,
    );

    const blueColorOption = screen.getAllByRole("radio")[0];
    fireEvent.click(blueColorOption);
    expect(blueColorOption).toBeChecked();
  });

  test("increases and decreases the quantity", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <DetailedProduct
            data={mockProductData}
            isLoading={false}
            error={null}
          />
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

  test("calls addToCart with correct product details", () => {
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
          <DetailedProduct
            data={mockProductData}
            isLoading={false}
            error={null}
          />
        </WishlistProvider>
      </CartContext.Provider>,
    );

    const buyNowButton = screen.getByText(/Buy Now/i);
    fireEvent.click(buyNowButton);
    expect(mockAddToCart).toHaveBeenCalledWith({
      title: "Test Product",
      price: 100,
      id: "1",
      qty: 1,
    });
  });
});
