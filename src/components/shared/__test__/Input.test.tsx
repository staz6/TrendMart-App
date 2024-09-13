import { render, fireEvent, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";
import Input from "../Input";

describe("Input Component Tests", () => {
  const onChangeMock = jest.fn();
  const onClickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders input correctly and triggers onChange handler", async () => {
    const { getByPlaceholderText } = render(
      <Input
        onClick={() => null}
        type="text"
        placeholder="Enter text"
        value=""
        onChange={onChangeMock}
        className="test-input"
      />,
    );

    const inputElement = getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Test Input" } });
    await waitFor(() => {
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith("Test Input");
    });
  });
  it("renders input with default props", () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={onChangeMock}
        onClick={() => null}
        className=""
      />,
    );

    const inputElement = getByPlaceholderText("Enter text") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.className).toBe("");
    expect(inputElement.value).toBe("");
  });

  it("handles onClick prop correctly", () => {
    const { getByPlaceholderText } = render(
      <Input
        type="text"
        placeholder="Enter text"
        value=""
        onChange={onChangeMock}
        className="test-input"
        onClick={onClickMock}
      />,
    );

    const inputElement = getByPlaceholderText("Enter text");
    fireEvent.click(inputElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
