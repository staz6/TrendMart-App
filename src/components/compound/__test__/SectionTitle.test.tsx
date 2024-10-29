import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTitle from "../SectionTitle";

describe("Section Title component", () => {
  it("renders title correctly", () => {
    render(<SectionTitle title="Flash Sales" />);
    expect(screen.getByText("Flash Sales")).toBeInTheDocument();
  });
});
