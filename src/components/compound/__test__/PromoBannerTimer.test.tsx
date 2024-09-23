import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import PromoBannerTimer from "../PromoBannerTimer";

jest.useFakeTimers();

describe("CountdownTimer component", () => {
  it("renders correctly with initial values", () => {
    render(<PromoBannerTimer />);
    expect(screen.getByText("days")).toBeInTheDocument();
    expect(screen.getByText("hours")).toBeInTheDocument();
    expect(screen.getByText("minutes")).toBeInTheDocument();
    expect(screen.getByText("seconds")).toBeInTheDocument();

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
  });

  it("updates time correctly after 1 second", () => {
    render(<PromoBannerTimer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("55")).toBeInTheDocument();
  });

  it("updates correctly when minutes and seconds change", () => {
    render(<PromoBannerTimer />);

    act(() => {
      jest.advanceTimersByTime(57000);
    });

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
    expect(screen.getByText("59")).toBeInTheDocument();
  });

  it("handles hour changes correctly", () => {
    render(<PromoBannerTimer />);

    act(() => {
      jest.advanceTimersByTime(3600000);
    });

    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
  });
});
