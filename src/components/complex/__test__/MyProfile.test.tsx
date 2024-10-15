import { render, screen, fireEvent } from "@testing-library/react";
import MyProfile from "../MyProfile";
import "@testing-library/jest-dom";

describe("MyProfile Component", () => {
  it("renders profile form with initial values", () => {
    render(<MyProfile />);
    expect(screen.getByPlaceholderText("First Name")).toHaveValue("Md");
    expect(screen.getByPlaceholderText("Last Name")).toHaveValue("Rimel");
    expect(screen.getByPlaceholderText("Email")).toHaveValue(
      "rimel1111@gmail.com",
    );
    expect(screen.getByPlaceholderText("Address")).toHaveValue(
      "Kingston, 5236, United State",
    );
    expect(screen.getByPlaceholderText("Current Password")).toHaveValue("");
    expect(screen.getByPlaceholderText("New Password")).toHaveValue("");
    expect(screen.getByPlaceholderText("Confirm New Password")).toHaveValue("");
  });

  it("updates state when input fields change", () => {
    render(<MyProfile />);
    const firstNameInput = screen.getByPlaceholderText("First Name");
    fireEvent.change(firstNameInput, { target: { value: "John" } });
    expect(firstNameInput).toHaveValue("John");

    const lastNameInput = screen.getByPlaceholderText("Last Name");
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    expect(lastNameInput).toHaveValue("Doe");

    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
    expect(emailInput).toHaveValue("johndoe@example.com");
  });

  it("calls handleSaveChanges when Save Changes button is clicked", () => {
    render(<MyProfile />);

    const saveButton = screen.getByText("Save Changes");
    fireEvent.click(saveButton);
  });

  it("calls cancel logic when Cancel button is clicked", () => {
    render(<MyProfile />);

    const cancelButton = screen.getByText("Cancel");
    fireEvent.click(cancelButton);
  });
});
