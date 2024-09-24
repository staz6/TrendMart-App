import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

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

describe("Testing Home page component", () => {
  it("Testing sections", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("HeroSection")).toBeInTheDocument();
    expect(screen.getByTestId("FlashSales")).toBeInTheDocument();
    expect(screen.getByTestId("BrowseByCategory")).toBeInTheDocument();
    expect(screen.getByTestId("BestSellingProducts")).toBeInTheDocument();
    expect(screen.getByTestId("PromoBanner")).toBeInTheDocument();
    expect(screen.getByTestId("ExploreOurProducts")).toBeInTheDocument();
  });
});
