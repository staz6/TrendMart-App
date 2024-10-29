import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Categories from "../Categories";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("axios");

let queryClient: QueryClient;
describe("Categories Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    queryClient = new QueryClient();
  });
  it("renders loading skeletons while loading", () => {
    (axios.get as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const skeletons = screen.getAllByTestId("CategorySkeleton");
    expect(skeletons).toHaveLength(8);
  });
  it("renders categories", async () => {
    const categories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: categories });

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <Categories />
        </MemoryRouter>
      </QueryClientProvider>,
    );

    await waitFor(() => {
      categories.forEach((category) => {
        expect(screen.getByText(category)).toBeInTheDocument();
      });
    });
  });
});
