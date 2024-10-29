import { render, screen } from "@testing-library/react";
import Account from "../Account";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../components/Context/UserAuthContext", () => ({
  useAuthContext: () => ({
    isAuthenticated: true,
  }),
}));

describe("Account component tests", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders UI elements correctly", () => {
    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("PageDirectory")).toBeInTheDocument();
    expect(screen.getByTestId("ProfileLeftBar")).toBeInTheDocument();
    expect(screen.getByTestId("AccountMainbar")).toBeInTheDocument();
  });

  it("renders username when authenticated and user details are available", () => {
    localStorage.setItem("userDetails", JSON.stringify({ name: "John Doe" }));

    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>,
    );

    expect(screen.getByText("Welcome !")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("does not render username when not authenticated or user details are missing", () => {
    jest.mock("../../components/Context/UserAuthContext", () => ({
      useAuthContext: () => ({
        isAuthenticated: false,
      }),
    }));

    render(
      <MemoryRouter>
        <Account />
      </MemoryRouter>,
    );

    expect(screen.queryByText("Welcome !")).not.toBeInTheDocument();
  });
});
