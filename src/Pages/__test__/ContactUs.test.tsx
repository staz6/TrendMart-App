import { fireEvent, render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.spyOn(window, "alert").mockImplementation(() => {});

describe("Contact Us tests", () => {
  it("Testing redering of UI", () => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>,
    );
    expect(screen.getByText("Call To Us")).toBeInTheDocument();
    expect(screen.getByText("Write To US")).toBeInTheDocument();
    expect(
      screen.getByText("We are available 24/7, 7 days a week."),
    ).toBeInTheDocument();
    expect(screen.getByText("Phone: +8801611112222")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Fill out our form and we will contact you within 24 hours.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Emails: customer@exclusive.com"),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Your Name *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Email *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Phone *")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Your Message")).toBeInTheDocument();
    expect(screen.getByTestId("ContactFormBtn")).toBeInTheDocument();
  });
  it("checking displaying of Success Message after correct form submission", () => {
    render(
      <MemoryRouter>
        <ContactUs />
      </MemoryRouter>,
    );
    const nameInput = screen.getByPlaceholderText("Your Name *");
    const emailInput = screen.getByPlaceholderText("Your Email *");
    const phoneInput = screen.getByPlaceholderText("Your Phone *");
    const messageTextarea = screen.getByPlaceholderText("Your Message");
    const submitButton = screen.getByTestId("ContactFormBtn");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(messageTextarea, {
      target: { value: "This is a test message." },
    });

    fireEvent.click(submitButton);

    expect(window.alert).toHaveBeenCalledWith(
      "Your email has been submitted. We will reply ASAP!",
    );
  });
});
