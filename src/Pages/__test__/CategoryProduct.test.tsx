import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { WishlistProvider } from "../../components/Context/WishlistContext";
import { CartProvider } from "../../components/Context/CartContext";
import CategoryProduct from "../CategoryProduct";
import { MemoryRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

describe("Wishlist Page tests", () => {
  it("Testing rendering of ui ", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <MemoryRouter>
              <CategoryProduct />
            </MemoryRouter>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>,
    );
    expect(screen.getByTestId("CategoriesSection")).toBeInTheDocument();
    expect(screen.getByTestId("ProductsOFcategories")).toBeInTheDocument();
  });
});
