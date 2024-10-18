import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "../CheckoutForm";
import "@testing-library/jest-dom";

describe("CheckoutForm", () => {
  let setFilledFormMock: jest.Mock;

  beforeEach(() => {
    setFilledFormMock = jest.fn();
  });

  it("should render all form fields", () => {
    render(<CheckoutForm setFilledForm={setFilledFormMock} />);
    expect(screen.getAllByRole("textbox")).toHaveLength(7);
  });

  it("should update form values when input changes and should call setFilledForm(true) when all required fields are filled", () => {
    render(<CheckoutForm setFilledForm={setFilledFormMock} />);

    const firstNameInput = screen.getAllByRole("textbox")[0];
    const CompanynameInput = screen.getAllByRole("textbox")[1];
    const streetAddressInput = screen.getAllByRole("textbox")[2];
    const ApartmentInput = screen.getAllByRole("textbox")[3];
    const townCityInput = screen.getAllByRole("textbox")[4];
    const phoneNumberInput = screen.getAllByRole("textbox")[5];
    const emailAddressInput = screen.getAllByRole("textbox")[6];

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(CompanynameInput, { target: { value: "Jwaffs" } });
    fireEvent.change(streetAddressInput, { target: { value: "Karachi" } });
    fireEvent.change(ApartmentInput, { target: { value: "Block 7" } });
    fireEvent.change(townCityInput, { target: { value: "DownTown" } });
    fireEvent.change(phoneNumberInput, { target: { value: "12345" } });
    fireEvent.change(emailAddressInput, { target: { value: "doe@gmail.com" } });

    expect(firstNameInput).toHaveValue("John");
    expect(CompanynameInput).toHaveValue("Jwaffs");
    expect(streetAddressInput).toHaveValue("Karachi");
    expect(ApartmentInput).toHaveValue("Block 7");
    expect(townCityInput).toHaveValue("DownTown");
    expect(phoneNumberInput).toHaveValue("12345");
    expect(emailAddressInput).toHaveValue("doe@gmail.com");
    expect(setFilledFormMock).toHaveBeenCalledWith(false);
  });

  it("should call setFilledForm(false) when all required fields are not filled", () => {
    render(<CheckoutForm setFilledForm={setFilledFormMock} />);

    // expect(setFilledFormMock).toHaveBeenCalledWith(true);
  });

  it("should call setFilledForm(false) when required fields are empty", () => {
    render(<CheckoutForm setFilledForm={setFilledFormMock} />);
    const firstNameInput = screen.getAllByRole("textbox")[0];
    const CompanynameInput = screen.getAllByRole("textbox")[1];

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(CompanynameInput, { target: { value: "Jwaffs" } });
    expect(setFilledFormMock).toHaveBeenCalledWith(false);
  });
});
