import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamMembers from "../../complex/TeamMembers";

jest.mock("swiper/css", () => {});
jest.mock("swiper/css/navigation", () => {});
jest.mock("swiper/css/pagination", () => {});
jest.mock("swiper/modules", () => {
  return {
    A11y: jest.fn(),
    Pagination: jest.fn(),
    Scrollbar: jest.fn(),
  };
});

jest.mock("swiper/react", () => {
  return {
    Swiper: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    SwiperSlide: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("TeamMembers Component", () => {
  it("renders the TeamMembers component and displays the correct team members", () => {
    render(<TeamMembers />);

    const names = ["Tom Cruise", "Emma Watson", "Will Smith"];

    names.forEach((name) => {
      const nameElement = screen.getAllByText(name);
      expect(nameElement.length).toBeGreaterThan(0);
    });

    const titles = [
      "Founder & Chairman",
      "Managing Director",
      "Product Designer",
    ];

    titles.forEach((title) => {
      const titleElement = screen.getAllByText(title);
      expect(titleElement.length).toBeGreaterThan(0);
    });

    expect(screen.getAllByLabelText("Twitter")).toHaveLength(6);
    expect(screen.getAllByLabelText("Instagram")).toHaveLength(6);
    expect(screen.getAllByLabelText("LinkedIn")).toHaveLength(6);
  });
});
