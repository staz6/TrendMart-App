import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter to mock routing
import "@testing-library/jest-dom";
import SignUp from "../SignUp";

describe("SignUp component Tests", () => {
  it("Testing rendering of LogIn ui", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );

    expect(screen.getByText("Create an account")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Email or Phone Number"),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    const LogInLink = screen.getByTestId("LogIn_Link");
    fireEvent.click(LogInLink);
    expect(screen.getByText("Log in to Exclusive")).toBeInTheDocument();
  });
  it("Testing Account Creation ", () => {
    render(
      <MemoryRouter>
        <SignUp />
      </MemoryRouter>,
    );
    fireEvent.change(screen.getByPlaceholderText("Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email or Phone Number"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password123" },
    });

    const CreateAccountBtn = screen.getByTestId("CreateAccountBtn");
    fireEvent.click(CreateAccountBtn);
    expect(
      screen.getByText("Account Created Successfully"),
    ).toBeInTheDocument();
  });
});
