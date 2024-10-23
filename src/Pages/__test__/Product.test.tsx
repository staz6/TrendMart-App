import { render, screen } from "@testing-library/react";
import Product from "../Product";
import "@testing-library/jest-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  Link: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));
jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));
jest.mock("../../components/complex/DetailedProduct", () =>
  jest.fn(() => <div>Mocked DetailedProduct</div>),
);
jest.mock("../../components/complex/RelatedItem", () =>
  jest.fn(() => <div>Mocked RelatedItem</div>),
);

describe("Product Component - Section Rendering", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ Id: "1" });
  });

  it("renders the key sections of the Product component", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: {
        id: 1,
        title: "Test Product",
        price: 99.99,
        image: "https://example.com/product.jpg",
        category: "electronics",
        rating: {
          rate: 4.5,
          count: 10,
        },
      },
      isLoading: false,
      error: null,
    });

    render(<Product />);

    expect(screen.getByTestId("PageDirectory")).toBeInTheDocument();

    expect(screen.getByTestId("ProductSideImages")).toBeInTheDocument();

    expect(screen.getByTestId("MainProductImage")).toBeInTheDocument();

    expect(screen.getByTestId("DetailedProductSection")).toBeInTheDocument();
  });
});
