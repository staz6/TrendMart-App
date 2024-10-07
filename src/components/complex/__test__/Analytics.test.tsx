import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Analytics from "../Analytics";
describe("Analytics Component", () => {
  it("renders the analytics section and handles hover states", () => {
    render(<Analytics />);

    const analyticsSection = screen.getByTestId("AnalyticsSection");
    expect(analyticsSection).toBeInTheDocument();

    const analyticsCards = screen.getAllByTestId("AnalyticsCard");
    expect(analyticsCards).toHaveLength(4);

    const values = ["10.5k", "33k", "45.5k", "25k"];
    const descriptions = [
      "Sellers active our site",
      "Monthly product sales",
      "Customers active in our site",
      "Annual gross sales in our site",
    ];

    values.forEach((value) => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });

    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });

    fireEvent.mouseEnter(analyticsCards[0]);
    expect(analyticsCards[0]).toHaveClass("bg-button2 text-white");

    fireEvent.mouseLeave(analyticsCards[0]);
    expect(analyticsCards[0]).not.toHaveClass("bg-button2 text-white");
  });
});
