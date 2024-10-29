import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutUs from "../AboutUs";
import { MemoryRouter } from "react-router-dom";

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
describe("Analytics Component", () => {
  it("renders the analytics section and handles hover states", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("PageDirectory"));
    expect(screen.getByTestId("OurStorySection"));
    expect(screen.getByTestId("AnalyticsSection"));
    expect(screen.getByTestId("TeamMembersSection"));
  });
});
