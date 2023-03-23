import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button/>", () => {
  const mockHandler = jest.fn();

  test("renders content", () => {
    render(<Button onClick={mockHandler}>Click me</Button>);
    const button = screen.getByText("Click me");

    expect(button).toBeInTheDocument();
  });

  test("click the button", () => {
    render(<Button onClick={mockHandler}>Click me</Button>);
    const button = screen.getByText("Click me");

    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
