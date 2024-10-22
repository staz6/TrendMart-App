import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { CartProvider } from "../../Context/CartContext";
import { WishlistProvider } from "../../Context/WishlistContext";
import ProductOfCategory from "../ProductOfCategory";

jest.mock("axios");

let queryClient: QueryClient;

describe("ProductOfCategory Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });

  it("renders loading skeletons while loading", () => {
    (axios.get as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <MemoryRouter>
              <ProductOfCategory />
            </MemoryRouter>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>,
    );

    const skeletons = screen.getAllByTestId("CategoryProductSkeleton");
    expect(skeletons).toHaveLength(6);
  });
  it("renders categories products", async () => {
    const products = [
      {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 },
      },
      {
        id: 16,
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 2.9, count: 340 },
      },
    ];

    (axios.get as jest.Mock).mockResolvedValueOnce({ data: products });

    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <MemoryRouter initialEntries={["/category/women's clothing"]}>
              <ProductOfCategory />
            </MemoryRouter>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      products.forEach((product) => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(
          screen.getByText(`$${product.price.toFixed(2)}`),
        ).toBeInTheDocument(); // Check price formatting
      });
    });
  });
});
