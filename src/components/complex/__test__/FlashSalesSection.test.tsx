import { render, screen, waitFor } from "@testing-library/react";
import FlashSalesSection from "../FlashSalesSection";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface SectionProps {
  children: React.ReactNode;
  sectionTitle: string;
  sliderTitle: string;
}

jest.mock("../Section", () => {
  return ({ children, sectionTitle, sliderTitle }: SectionProps) => (
    <div>
      <h1>{sectionTitle}</h1>
      <h1>{sliderTitle}</h1>
      <div>{children}</div>
    </div>
  );
});

beforeAll(() => {
  jest.spyOn(console, "log").mockImplementation(() => {});
});

let queryClient: QueryClient;
describe("FlashSalesSection section tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });
  it("Testing skeleton loading", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FlashSalesSection />
      </QueryClientProvider>,
    );
    expect(screen.getAllByTestId("ProductSkeleton")).toHaveLength(6);
  });
  it("Testing rendering of ui", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <FlashSalesSection />
      </QueryClientProvider>,
    );
    expect(screen.getByText("Today's")).toBeInTheDocument();
    expect(screen.getByText("Flash Sales")).toBeInTheDocument();
    waitFor(() => {
      const productCards = screen.getAllByTestId("ProductCard");
      expect(productCards).toHaveLength(10);
    });
  });
});
