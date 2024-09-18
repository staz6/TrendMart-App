import React from "react";
import { render, screen } from "@testing-library/react";
import Section from "../Section";
import "@testing-library/jest-dom";

jest.mock("swiper/css", () => {});
jest.mock("swiper/css/navigation", () => {});
jest.mock("../../compound/CountDownTimer", () => () => (
  <div>Countdown Timer</div>
));
jest.mock(
  "../../compound/SectionTitle",
  () =>
    ({ title }: { title: string }) => <h1>{title}</h1>,
);
jest.mock("../../compound/SectionSliderControls", () => () => (
  <div>Slider Controls</div>
));
jest.mock(
  "../../compound/SectionSliderContent",
  () =>
    ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
);

describe("Section component", () => {
  const sectionTitle = "Today's Deals";
  const sliderTitle = "Flash Sales";

  it("renders the section title and slider title", () => {
    render(
      <Section
        showPagination
        sectionTitle={sectionTitle}
        sliderTitle={sliderTitle}
        showTimer={false}
      >
        <div>Product Card 1</div>
        <div>Product Card 2</div>
      </Section>,
    );

    expect(screen.getByText(sectionTitle)).toBeInTheDocument();
    expect(screen.getByText(sliderTitle)).toBeInTheDocument();

    expect(screen.queryByText("Countdown Timer")).not.toBeInTheDocument();
  });

  it("renders the CountdownTimer when showTimer is true", () => {
    render(
      <Section
        showPagination
        sectionTitle={sectionTitle}
        sliderTitle={sliderTitle}
        showTimer={true}
      >
        <div>Product Card 1</div>
        <div>Product Card 2</div>
      </Section>,
    );

    expect(screen.getByText("Countdown Timer")).toBeInTheDocument();
  });

  it("renders the slider controls and content", () => {
    render(
      <Section
        showPagination
        sectionTitle={sectionTitle}
        sliderTitle={sliderTitle}
        showTimer={false}
      >
        <div>Product Card 1</div>
        <div>Product Card 2</div>
      </Section>,
    );

    expect(screen.getByText("Slider Controls")).toBeInTheDocument();
    expect(screen.getByText("Product Card 2")).toBeInTheDocument();
  });
});
