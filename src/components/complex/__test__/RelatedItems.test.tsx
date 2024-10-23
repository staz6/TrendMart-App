import { render, screen } from "@testing-library/react";
import RelatedItem from "../RelatedItem";
import "@testing-library/jest-dom";
import { useQuery } from "@tanstack/react-query";

jest.mock("../../compound/ProductCard", () =>
  jest.fn(() => <div>Mocked ProductCard</div>),
);
jest.mock("../../compound/SectionTitle", () =>
  jest.fn(() => <div>Mocked SectionTitle</div>),
);

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("RelatedItem", () => {
  const mockData = [
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      title: "Product 1",
      price: 10,
      rating: { rate: 4.5 },
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      title: "Product 2",
      price: 20,
      rating: { rate: 4.0 },
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      title: "Product 3",
      price: 30,
      rating: { rate: 3.5 },
    },
    {
      id: 4,
      image: "https://example.com/image4.jpg",
      title: "Product 4",
      price: 40,
      rating: { rate: 5.0 },
    },
  ];

  it("renders the SectionTitle", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    });

    render(<RelatedItem category="electronics" />);

    expect(screen.getByText("Mocked SectionTitle")).toBeInTheDocument();
  });

  it("renders 4 ProductCards when data is available", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    render(<RelatedItem category="electronics" />);

    const productCards = screen.getAllByText("Mocked ProductCard");
    expect(productCards).toHaveLength(4);
  });

  it("shows loading skeletons when isLoading is true", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    });

    render(<RelatedItem category="electronics" />);

    const skeletons = screen.getAllByTestId("CategoryProductSkeleton");
    expect(skeletons).toHaveLength(4);
  });

  it("renders an error message when the query fails", () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error("Failed to fetch"),
    });

    render(<RelatedItem category="electronics" />);

    expect(screen.getByText("Error Loading Product")).toBeInTheDocument();
  });
});
