import { render, screen, fireEvent } from "@testing-library/react";
import JustForYouSection from "../JustForYouSection";
import "@testing-library/jest-dom";
import { CartProvider } from "../../Context/CartContext";
import { MemoryRouter } from "react-router-dom";
import { WishlistProvider } from "../../Context/WishlistContext";

describe("JustForYouSection", () => {
  it("renders the section with title and 'See All' button", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <MemoryRouter>
            <JustForYouSection />
          </MemoryRouter>
        </WishlistProvider>
      </CartProvider>,
    );

    expect(screen.getByText("Just For You")).toBeInTheDocument();
    expect(screen.getByText(/See All/)).toBeInTheDocument();
  });

  it("renders 4 ProductCards", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <MemoryRouter>
            <JustForYouSection />
          </MemoryRouter>
        </WishlistProvider>
      </CartProvider>,
    );

    const productCards = screen.getAllByTestId("ProductCard");
    expect(productCards).toHaveLength(5);
  });

  it("calls the correct functions when interacting with buttons", () => {
    render(
      <CartProvider>
        <WishlistProvider>
          <MemoryRouter>
            <JustForYouSection />
          </MemoryRouter>
        </WishlistProvider>
      </CartProvider>,
    );

    const seeAllButton = screen.getByText(/See All/);
    fireEvent.click(seeAllButton);
  });
});
