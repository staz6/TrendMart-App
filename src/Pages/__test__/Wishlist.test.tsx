import { render, screen } from "@testing-library/react";
import Wishlist from "../Wishlist";
import "@testing-library/jest-dom";
import { WishlistProvider } from "../../components/Context/WishlistContext";
import { CartProvider } from "../../components/Context/CartContext";

describe("Wishlist Page tests", () => {
  it("Testing rendering of ui ", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <Wishlist />
        </WishlistProvider>
      </CartProvider>,
    );
    expect(screen.getByTestId("WishlistSection")).toBeInTheDocument();
    expect(screen.getByTestId("JustForYouSection")).toBeInTheDocument();
  });
});
