import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button Component Tests", () => {
  it("renders button correctly with description and icon", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <Button
        onClick={onClickMock}
        icon={<span>Icon</span>}
        className="test-class"
        description="Button Description"
        testid="button-testid"
      />,
    );

    expect(getByText("Button Description")).toBeInTheDocument();
    expect(getByText("Icon")).toBeInTheDocument();
  });

  it("calls onClick handler when button is clicked", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      <Button
        onClick={onClickMock}
        icon={<span>Icon</span>}
        className="test-class"
        description="Button Description"
        testid="button-testid"
      />,
    );

    fireEvent.click(getByTestId("button-testid"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders button correctly without description and with children", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      // @ts-expect-error
      <Button
        onClick={onClickMock}
        icon={<span>Icon</span>}
        className="test-class"
        testid="button-testid"
      >
        Children Content
      </Button>,
    );

    expect(getByText("Children Content")).toBeInTheDocument();
    expect(getByText("Icon")).toBeInTheDocument();
  });

  it("renders button with default className when className is not provided", () => {
    const onClickMock = jest.fn();

    const { getByTestId } = render(
      // @ts-expect-error
      <Button
        onClick={onClickMock}
        icon={<span>Icon</span>}
        description="Button Description"
        testid="button-testid"
      />,
    );

    const buttonElement = getByTestId("button-testid");
    expect(buttonElement).toHaveAttribute("class", "");
  });

  it("renders button without description when description is not provided", () => {
    const onClickMock = jest.fn();

    const { queryByText } = render(
      // @ts-expect-error
      <Button
        onClick={onClickMock}
        icon={<span>Icon</span>}
        className="test-class"
        testid="button-testid"
      />,
    );

    const descriptionElement = queryByText("Button Description");
    expect(descriptionElement).not.toBeInTheDocument();
  });
});
