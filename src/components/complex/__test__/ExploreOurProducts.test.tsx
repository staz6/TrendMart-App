import { render, screen } from "@testing-library/react";
import ExploreOurProducts from "../ExploreOurProducts";
import "@testing-library/jest-dom";

interface SectionProps {
  children: React.ReactNode;
  sectionTitle: string;
  sliderTitle: string;
}

jest.mock("../Section", () => {
  return ({ children, sectionTitle, sliderTitle }: SectionProps) => (
    <div>
      <h1>{sectionTitle}</h1>
      <h1>{sliderTitle}</h1>
      <div>{children}</div>
    </div>
  );
});

beforeAll(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

describe("ExploreOurProducts section tests", () => {
  it("Testing rendering of ui", () => {
    render(<ExploreOurProducts />);
    expect(screen.getByText("Our Products")).toBeInTheDocument();
    expect(screen.getByText("Explore Our Products")).toBeInTheDocument();
    const productCards = screen.getAllByText("HAVIT HV-G92 Gamepad");
    expect(productCards).toHaveLength(6);
  });
});
