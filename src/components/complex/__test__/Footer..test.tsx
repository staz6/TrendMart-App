import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer component tests", () => {
  it("Test rendering of ui", () => {
    render(<Footer />);
    expect(screen.getAllByTestId("FooterLinks")).toHaveLength(4);
    expect(screen.getByTestId("FooterAppColumn")).toBeInTheDocument();
  });
});
