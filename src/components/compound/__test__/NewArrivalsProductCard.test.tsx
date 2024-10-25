import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewArrivalsProductCard from "../NewArrivalsProductCard";
import { MemoryRouter } from "react-router-dom";

describe("ProductCard Component", () => {
  const mockProduct = {
    title: "PlayStation 5",
    description: "Black and White version of the PS5<br/>coming out on sale.",
    imageUrl: "/path/to/ps5-image.png",
    link: "/Testlink",
  };

  test("should render product title, description, and image", () => {
    render(
      <MemoryRouter>
        <NewArrivalsProductCard {...mockProduct} />
      </MemoryRouter>,
    );

    expect(screen.getByText("PlayStation 5")).toBeInTheDocument();
    expect(
      screen.getByText(/Black and White version of the PS5/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/coming out on sale./i)).toBeInTheDocument();
    const image = screen.getByAltText("PlayStation 5");
    expect(image).toHaveAttribute("src", "/path/to/ps5-image.png");
  });

  test("should navigate to correct link when 'Shop Now' is clicked", () => {
    render(
      <MemoryRouter>
        <NewArrivalsProductCard {...mockProduct} />
      </MemoryRouter>,
    );

    const shopNowLink = screen.getByText("Shop Now");
    expect(shopNowLink).toHaveAttribute("href", "/Testlink");
  });
});
