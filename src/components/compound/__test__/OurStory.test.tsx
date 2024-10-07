import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import OurStory from "../../complex/OurStory";

describe("OurStory Component", () => {
  it("renders the entire UI correctly", () => {
    render(<OurStory />);

    const heading = screen.getByText("Our Story");
    expect(heading).toBeInTheDocument();

    const firstParagraph = screen.getByText(
      /Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace/i,
    );
    expect(firstParagraph).toBeInTheDocument();

    const secondParagraph = screen.getByText(
      /Exclusive has more than 1 Million products to offer/i,
    );
    expect(secondParagraph).toBeInTheDocument();
  });
});
