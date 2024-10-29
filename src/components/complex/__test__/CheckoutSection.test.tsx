import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import CheckoutSection from "../CheckoutSection";
import { CartContext } from "../../Context/CartContext";

const mockCartItems = [
  {
    id: "1",
    title: "HAVIT HV-G92 Gamepad",
    price: 20,
    qty: 2,
    image: "TestImage",
  },
];

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("CheckoutSection", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders cart items correctly", () => {
    render(
      <Router>
        <CartContext.Provider
          value={{
            setCartItems() {},
            cartItems: mockCartItems,
            updateQuantity() {},
            removeFromCart() {},
            addToCart() {},
          }}
        >
          <CheckoutSection filledForm={true} />
        </CartContext.Provider>
      </Router>,
    );

    expect(screen.getByText(/HAVIT HV-G92 Gamepad/i)).toBeInTheDocument();
    expect(screen.getAllByText(/40/i)).toHaveLength(2);
  });

  it("renders total amounts correctly", () => {
    render(
      <Router>
        <CartContext.Provider
          value={{
            setCartItems() {},
            cartItems: mockCartItems,
            updateQuantity() {},
            removeFromCart() {},
            addToCart() {},
          }}
        >
          <CheckoutSection filledForm={true} />
        </CartContext.Provider>
      </Router>,
    );

    expect(screen.getByText("Subtotal:")).toBeInTheDocument();
    expect(screen.getAllByText(/40/i)).toHaveLength(2);
    expect(screen.getByText("Shipping:")).toBeInTheDocument();
    expect(screen.getByText(/50/i)).toBeInTheDocument();
    expect(screen.getByText("Total:")).toBeInTheDocument();
    expect(screen.getByText(/90/i)).toBeInTheDocument();
  });

  it("allows payment option selection", () => {
    render(
      <Router>
        <CartContext.Provider
          value={{
            setCartItems() {},
            cartItems: mockCartItems,
            updateQuantity() {},
            removeFromCart() {},
            addToCart() {},
          }}
        >
          <CheckoutSection filledForm={true} />
        </CartContext.Provider>
      </Router>,
    );

    const bankOption = screen.getAllByRole("radio")[0];
    const codOption = screen.getAllByRole("radio")[1];

    fireEvent.click(bankOption);
    expect(bankOption).toBeChecked();

    fireEvent.click(codOption);
    expect(codOption).toBeChecked();
  });

  it("calls handleOrder and saves to localStorage when form is filled", () => {
    render(
      <Router>
        <CartContext.Provider
          value={{
            setCartItems() {},
            cartItems: mockCartItems,
            updateQuantity() {},
            removeFromCart() {},
            addToCart() {},
          }}
        >
          <CheckoutSection filledForm={true} />
        </CartContext.Provider>
      </Router>,
    );

    const placeOrderButton = screen.getByText(/Place Order/i);
    fireEvent.click(placeOrderButton);

    expect(localStorage.getItem("order")).toBeTruthy();
    expect(mockNavigate).toHaveBeenCalledWith("OrderMessage");
  });

  it("shows an alert when form is not filled", () => {
    window.alert = jest.fn();

    render(
      <Router>
        <CartContext.Provider
          value={{
            setCartItems() {},
            cartItems: mockCartItems,
            updateQuantity() {},
            removeFromCart() {},
            addToCart() {},
          }}
        >
          <CheckoutSection filledForm={false} />
        </CartContext.Provider>
      </Router>,
    );

    const placeOrderButton = screen.getByText(/Place Order/i);
    fireEvent.click(placeOrderButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Please fill all the form fields",
    );
    expect(localStorage.getItem("order")).toBeNull();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
