import { render, screen, fireEvent } from "@testing-library/react";
import Cart from "../Cart";
import { useCart } from "../../Context/CartContext";
import "@testing-library/jest-dom";

jest.mock("../../Context/CartContext", () => ({
  useCart: jest.fn(),
}));

describe("Cart Component", () => {
  const mockUpdateQuantity = jest.fn();
  const mockRemoveFromCart = jest.fn();

  const cartItems = [
    { id: "1", title: "Monitor", price: 200, qty: 1 },
    { id: "2", title: "Keyboard", price: 50, qty: 2 },
  ];

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems,
      updateQuantity: mockUpdateQuantity,
      removeFromCart: mockRemoveFromCart,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render cart items correctly", () => {
    render(<Cart />);

    expect(screen.getByText("Monitor")).toBeInTheDocument();
    expect(screen.getByText("Keyboard")).toBeInTheDocument();
    expect(screen.getAllByText("$200")).toHaveLength(2);
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();
    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
  });

  it("should increase and decrease quantity", () => {
    render(<Cart />);

    const incrementButton = screen.getAllByTestId("CartIncrementBtn")[0];
    fireEvent.click(incrementButton);
    expect(mockUpdateQuantity).toHaveBeenCalledWith("1", 1);

    const decrementButton = screen.getAllByTestId("CartDecrementBtn")[0];
    fireEvent.click(decrementButton);
    expect(mockUpdateQuantity).toHaveBeenCalledWith("1", -1);
  });

  it("should remove an item from the cart", () => {
    render(<Cart />);

    fireEvent.mouseEnter(screen.getByText("Monitor"));

    const removeButton = screen.getAllByTestId("CartRemoveBtn")[0];
    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalledWith("1");
  });

  it("should not render cart items if cart is empty", () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
      updateQuantity: mockUpdateQuantity,
      removeFromCart: mockRemoveFromCart,
    });

    render(<Cart />);

    expect(screen.queryByText("Product")).not.toBeInTheDocument();
  });
});
