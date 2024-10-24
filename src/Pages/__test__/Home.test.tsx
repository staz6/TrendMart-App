import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";
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

const queryClient = new QueryClient();

describe("Testing Home page component", () => {
  it("Testing sections", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByTestId("HeroSection")).toBeInTheDocument();
    expect(screen.getByTestId("FlashSales")).toBeInTheDocument();
    expect(screen.getByTestId("BrowseByCategory")).toBeInTheDocument();
    expect(screen.getByTestId("BestSellingProducts")).toBeInTheDocument();
    expect(screen.getByTestId("PromoBanner")).toBeInTheDocument();
    expect(screen.getByTestId("ExploreOurProducts")).toBeInTheDocument();
    expect(screen.getByTestId("ServiceSection")).toBeInTheDocument();
    expect(screen.getByTestId("NewArrivals")).toBeInTheDocument();
  });
});
