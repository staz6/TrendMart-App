import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProfileLeftbar from "../ProfileLeftbar";
import "@testing-library/jest-dom";

describe("ProfileLeftbar component tests", () => {
  it("Testing rendering of ui", () => {
    render(
      <MemoryRouter>
        <ProfileLeftbar />
      </MemoryRouter>,
    );
    expect(screen.getByText("Manage My Account"));
    expect(screen.getByText("My Profile"));
    expect(screen.getByText("My Orders"));
    expect(screen.getByText("My Order History"));
    expect(screen.getAllByText("My WishList")).toHaveLength(2);
  });
});
