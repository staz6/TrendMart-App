import { render, screen } from "@testing-library/react";
import NewArrivalSection from "../NewArrivalSection";
import "@testing-library/jest-dom";

describe("NewArrivals section tests", () => {
  it("Testing rendering of ui", () => {
    render(<NewArrivalSection />);
    expect(screen.getByText("New Arrival")).toBeInTheDocument();
    expect(screen.getByText("Featured")).toBeInTheDocument();
    expect(screen.getAllByTestId("NewArrivalsProductCard")).toHaveLength(4);
  });
});
