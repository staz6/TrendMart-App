import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountdownTimer from "../CountDownTimer";

jest.useFakeTimers();

describe("CountdownTimer component", () => {
  it("renders correctly with initial values", () => {
    render(<CountdownTimer />);
    expect(screen.getByText("Days")).toBeInTheDocument();
    expect(screen.getByText("Hours")).toBeInTheDocument();
    expect(screen.getByText("Minutes")).toBeInTheDocument();
    expect(screen.getByText("Seconds")).toBeInTheDocument();

    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
  });

  it("updates time correctly after 1 second", () => {
    render(<CountdownTimer />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("55")).toBeInTheDocument();
  });

  it("updates correctly when minutes and seconds change", () => {
    render(<CountdownTimer />);

    act(() => {
      jest.advanceTimersByTime(57000);
    });

    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("23")).toBeInTheDocument();
    expect(screen.getByText("18")).toBeInTheDocument();
    expect(screen.getByText("59")).toBeInTheDocument();
  });

  it("handles hour changes correctly", () => {
    render(<CountdownTimer />);

    act(() => {
      jest.advanceTimersByTime(3600000);
    });

    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("22")).toBeInTheDocument();
    expect(screen.getByText("19")).toBeInTheDocument();
    expect(screen.getByText("56")).toBeInTheDocument();
  });
});
