import { render, screen } from "@testing-library/react";
import { MemoryRouter, useParams } from "react-router-dom";
import AllProducts from "../AllProducts";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

let queryClient: QueryClient;

describe("AllProducts Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });
  test("renders Flash Sales section when section is 'Flash Sales'", () => {
    (useParams as jest.Mock).mockReturnValue({ section: "Flash Sales" });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AllProducts />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("FlashSales")).toBeInTheDocument();
  });

  test("renders Best Selling section when section is 'Best Selling Products'", () => {
    (useParams as jest.Mock).mockReturnValue({
      section: "Best Selling Products",
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AllProducts />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("BestSellingProducts")).toBeInTheDocument();
  });

  test("renders Explore Our Products section when section is 'Explore Our Products'", () => {
    (useParams as jest.Mock).mockReturnValue({
      section: "Explore Our Products",
    });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <AllProducts />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    expect(screen.getByTestId("ExploreOurProducts")).toBeInTheDocument();
  });
});
