import { render, screen } from "@testing-library/react";
import ServicesSection from "../ServicesSection";
import "@testing-library/jest-dom";

describe("Service section tests", () => {
  it("Testing rendering of UI", () => {
    render(<ServicesSection />);
    expect(screen.getAllByTestId("ServiceCard")).toHaveLength(3);
  });
});
