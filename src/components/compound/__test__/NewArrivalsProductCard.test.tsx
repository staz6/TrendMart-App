import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewArrivalsProductCard from "../NewArrivalsProductCard";

describe("ProductCard Component", () => {
  const mockShopNow = jest.fn();
  const mockProduct = {
    title: "PlayStation 5",
    description: "Black and White version of the PS5<br/>coming out on sale.",
    imageUrl: "/path/to/ps5-image.png",
  };

  test("should render product title, description, and image", () => {
    render(<NewArrivalsProductCard onShopNow={mockShopNow} {...mockProduct} />);

    expect(screen.getByText("PlayStation 5")).toBeInTheDocument();
    expect(
      screen.getByText(/Black and White version of the PS5/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/coming out on sale./i)).toBeInTheDocument();
    const image = screen.getByAltText("PlayStation 5");
    expect(image).toHaveAttribute("src", "/path/to/ps5-image.png");
  });

  test("Testing handle Shop now button functionality", () => {
    render(<NewArrivalsProductCard onShopNow={mockShopNow} {...mockProduct} />);
    const button = screen.getByText("Shop Now");
    fireEvent.click(button);
    expect(mockShopNow).toHaveBeenCalled();
  });
});
