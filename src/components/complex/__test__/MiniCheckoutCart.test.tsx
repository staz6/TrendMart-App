import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutSection from "../MiniCheckoutCart";
import { useCart } from "../../Context/CartContext";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../Context/CartContext", () => ({
  useCart: jest.fn(),
}));

describe("CheckoutSection Component", () => {
  const cartItems = [
    { id: "1", title: "Monitor", price: 500, qty: 2 },
    { id: "2", title: "Keyboard", price: 100, qty: 1 },
  ];

  beforeEach(() => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render checkout totals correctly", () => {
    render(
      <MemoryRouter>
        <CheckoutSection />
      </MemoryRouter>,
    );
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getAllByText("$1100")).toHaveLength(2);
  });

  it('should display the "Return To Shop" link', () => {
    render(
      <MemoryRouter>
        <CheckoutSection />
      </MemoryRouter>,
    );

    const returnLink = screen.getByText("Return To Shop");
    expect(returnLink).toBeInTheDocument();
    expect(returnLink.closest("a")).toHaveAttribute("href", "/");
  });
  it('should display "No Items In The Cart" when cart is empty', () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
    });

    render(
      <MemoryRouter>
        <CheckoutSection />
      </MemoryRouter>,
    );
    expect(screen.getByText("No Items In The Cart")).toBeInTheDocument();
  });
  it("should allow typing and applying a coupon code", () => {
    render(
      <MemoryRouter>
        <CheckoutSection />
      </MemoryRouter>,
    );

    const couponInput = screen.getByPlaceholderText("Coupon Code");
    fireEvent.change(couponInput, { target: { value: "DISCOUNT10" } });
    expect(couponInput).toHaveValue("DISCOUNT10");
    const applyCouponButton = screen.getByText("Apply Coupon");
    fireEvent.click(applyCouponButton);
    expect(screen.getByText("Apply Coupon")).toBeInTheDocument();
  });

  it("should proceed to checkout", () => {
    render(
      <MemoryRouter>
        <CheckoutSection />
      </MemoryRouter>,
    );
    const checkoutButton = screen.getByText("Proceed To Checkout");
    fireEvent.click(checkoutButton);
    expect(screen.getByText("Proceed To Checkout")).toBeInTheDocument();
  });
});
