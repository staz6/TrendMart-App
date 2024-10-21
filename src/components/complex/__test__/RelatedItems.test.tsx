import { render, screen } from "@testing-library/react";
import RelatedItem from "../RelatedItem";
import "@testing-library/jest-dom";

jest.mock("../../compound/ProductCard", () =>
  jest.fn(() => <div>Mocked ProductCard</div>),
);
jest.mock("../../compound/SectionTitle", () =>
  jest.fn(() => <div>Mocked SectionTitle</div>),
);

describe("RelatedItem", () => {
  it("Testing rendering of ui", () => {
    render(<RelatedItem />);

    expect(screen.getByText("Mocked SectionTitle")).toBeInTheDocument();
  });

  it("renders 4 ProductCards", () => {
    render(<RelatedItem />);

    const productCards = screen.getAllByText(/Mocked ProductCard/);
    expect(productCards).toHaveLength(4);
  });
});
