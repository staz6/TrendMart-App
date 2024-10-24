import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import ViewCart from "../ViewCart";
import { CartProvider } from "../../components/Context/CartContext";
import { AuthProvider } from "../../components/Context/UserAuthContext";

describe("ViewCart Component", () => {
  it("Testing rendering of UI", () => {
    render(
      <AuthProvider>
        <CartProvider>
          <MemoryRouter>
            <ViewCart />
          </MemoryRouter>
        </CartProvider>
      </AuthProvider>,
    );
    expect(screen.getByTestId("PageDirectory"));
    expect(screen.getByTestId("CartSection"));
    expect(screen.getByTestId("MiniCheckoutCart"));
  });
});
