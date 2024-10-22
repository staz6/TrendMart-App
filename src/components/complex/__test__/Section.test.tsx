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
    ({
      children,
      spaceBetween,
      breakpoints,
      loop,
    }: {
      children: React.ReactNode;
      spaceBetween: number;
      breakpoints: {
        [key: number]: {
          slidesPerView: number;
        };
      };
      loop: boolean;
    }) => (
      <div>
        <div data-testid="spaceBetween">{spaceBetween}</div>
        <div data-testid="breakpoints">{JSON.stringify(breakpoints)}</div>
        <div data-testid="loop">{loop.toString()}</div>
        <div>{children}</div>
      </div>
    ),
);

describe("Section component", () => {
  const sectionTitle = "Today's Deals";
  const sliderTitle = "Flash Sales";

  it("renders the section title and slider title", () => {
    render(
      <Section
        slider
        showPagination={false}
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
    expect(screen.queryByText("View All Products")).not.toBeInTheDocument();
    expect(screen.queryByText("Countdown Timer")).not.toBeInTheDocument();
  });

  it("renders the CountdownTimer when showTimer and showPagination is true", () => {
    render(
      <Section
        showPagination
        sectionTitle={sectionTitle}
        sliderTitle={sliderTitle}
        showTimer={true}
        slider
      >
        <div>Product Card 1</div>
        <div>Product Card 2</div>
      </Section>,
    );

    expect(screen.getByText("Countdown Timer")).toBeInTheDocument();
    expect(screen.getByTestId("paginationProductsSection")).toBeInTheDocument();
  });

  it("renders the slider controls and content", () => {
    render(
      <Section
        slider
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
    expect(screen.getByText("Product Card 1")).toBeInTheDocument();
  });
  it("renders with custom spaceBetween, breakpoints, and loop values", () => {
    const customBreakpoints = {
      500: { slidesPerView: 1 },
      900: { slidesPerView: 3 },
    };

    render(
      <Section
        slider
        showPagination={false}
        sectionTitle={sectionTitle}
        sliderTitle={sliderTitle}
        showTimer={false}
        spaceBetween={20}
        breakpoints={customBreakpoints}
        loop={false}
      >
        <div>Product Card 1</div>
        <div>Product Card 2</div>
      </Section>,
    );

    expect(screen.getByTestId("spaceBetween")).toHaveTextContent("20");
    expect(screen.getByTestId("breakpoints")).toHaveTextContent(
      JSON.stringify(customBreakpoints),
    );
    expect(screen.getByTestId("loop")).toHaveTextContent("false");
  });
});
