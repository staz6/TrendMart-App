import { render, screen, waitFor } from "@testing-library/react";
import BrowseByCategoryProducts from "../BrowseByCategoryProducts";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { CartProvider } from "../../components/Context/CartContext";
import { WishlistProvider } from "../../components/Context/WishlistContext";

jest.mock("swiper/css", () => {});
jest.mock("swiper/css/navigation", () => {});
jest.mock("../../components/compound/SectionSliderControls", () => () => (
  <div>Slider Controls</div>
));
jest.mock("../../components/compound/SectionSliderContent", () => () => (
  <div>Slider Content</div>
));
jest.mock("../../components/compound/HeroSlider", () => () => (
  <div>Hero Slider</div>
));

// Mocking axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

let queryClient: QueryClient;

describe("BrowseByCategoryProducts component tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });

  it("should render the UI with skeletons and product cards", async () => {
    // Mock the API response for fetching category products
    mockedAxios.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          title: "Product 1",
          price: 100,
          image: "image1.jpg",
          rating: { rate: 4.5 },
        },
        {
          id: 2,
          title: "Product 2",
          price: 200,
          image: "image2.jpg",
          rating: { rate: 4.0 },
        },
        {
          id: 3,
          title: "Product 3",
          price: 150,
          image: "image3.jpg",
          rating: { rate: 3.5 },
        },
        {
          id: 4,
          title: "Product 4",
          price: 250,
          image: "image4.jpg",
          rating: { rate: 4.8 },
        },
      ],
    });

    render(
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <WishlistProvider>
            <MemoryRouter>
              <BrowseByCategoryProducts />
            </MemoryRouter>
          </WishlistProvider>
        </CartProvider>
      </QueryClientProvider>,
    );

    // Verify CategoriesSection is rendered
    expect(screen.getByTestId("BrowseByCategory")).toBeInTheDocument();

    // Verify skeleton loaders are rendered
    expect(screen.getAllByTestId("ProductSkeleton")).toHaveLength(4);

    // Wait for product cards to load
    await waitFor(() => {
      expect(screen.getAllByTestId("ProductCard")).toHaveLength(4);
    });
  });
});
