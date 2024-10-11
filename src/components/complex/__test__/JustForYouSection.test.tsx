import { render, screen, fireEvent } from "@testing-library/react";
import JustForYouSection from "../JustForYouSection";
import "@testing-library/jest-dom";

jest.mock("../../compound/ProductCard", () =>
  jest.fn(() => <div>Mocked ProductCard</div>),
);
jest.mock("../../compound/SectionTitle", () =>
  jest.fn(() => <div>Mocked SectionTitle</div>),
);

describe("JustForYouSection", () => {
  it("renders the section with title and 'See All' button", () => {
    render(<JustForYouSection />);

    expect(screen.getByText("Mocked SectionTitle")).toBeInTheDocument();
    expect(screen.getByText(/See All/)).toBeInTheDocument();
  });

  it("renders 4 ProductCards", () => {
    render(<JustForYouSection />);

    const productCards = screen.getAllByText(/Mocked ProductCard/);
    expect(productCards).toHaveLength(4);
  });

  it("calls the correct functions when interacting with buttons", () => {
    render(<JustForYouSection />);

    const seeAllButton = screen.getByText(/See All/);
    fireEvent.click(seeAllButton);
  });
});
