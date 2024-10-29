import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Checkout from "../Checkout";
import { MemoryRouter } from "react-router-dom";
import { CartProvider } from "../../components/Context/CartContext";

describe("Checkout page tests", () => {
  it("Testing rendering of ui", () => {
    render(
      <CartProvider>
        <MemoryRouter>
          <Checkout />
        </MemoryRouter>
      </CartProvider>,
    );
    expect(screen.getByTestId("CheckoutForm")).toBeInTheDocument();
    expect(screen.getByTestId("CheckoutSection")).toBeInTheDocument();
  });
});
