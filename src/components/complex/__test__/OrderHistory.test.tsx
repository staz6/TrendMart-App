import { render, screen } from "@testing-library/react";
import OrderHistory from "../OrderHistory";
import "@testing-library/jest-dom";

const mockOrder = {
  cartItems: [
    { title: "Product 1", price: 50, qty: 2 },
    { title: "Product 2", price: 30, qty: 1 },
  ],
  paymentMethod: "Bank",
  subtotal: 130,
  shippingFee: 10,
  total: 140,
};

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockOrder));
});

test("renders order history correctly", () => {
  render(<OrderHistory />);

  const titleElement = screen.getByText(/Order History/i);
  expect(titleElement).toBeInTheDocument();

  const product1 = screen.getByText(/Product 1/i);
  const product2 = screen.getByText(/Product 2/i);
  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();

  const subtotal = screen.getByText("$130");
  const shippingFee = screen.getByText("$10");
  const total = screen.getByText("$140");
  expect(subtotal).toBeInTheDocument();
  expect(shippingFee).toBeInTheDocument();
  expect(total).toBeInTheDocument();

  const paymentMethod = screen.getByText(/Payment Method: Bank/i);
  expect(paymentMethod).toBeInTheDocument();
});

test("renders message when no order history is available", () => {
  Storage.prototype.getItem = jest.fn(() => null);

  render(<OrderHistory />);

  const noHistoryMessage = screen.getByText(/No order history available/i);
  expect(noHistoryMessage).toBeInTheDocument();
});
