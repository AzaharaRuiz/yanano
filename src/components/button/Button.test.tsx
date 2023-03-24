import { render, fireEvent, screen } from "@testing-library/react";
import Button, { buttonSizes, buttonVariants } from "./Button";

const findSentence = (sentence: string) => (string: string) => {
  return string.match(new RegExp(`S*${sentence}S*`)) || [];
};

describe("<Button/>", () => {
  const mockHandler = jest.fn();
  const textButton = "Click me";

  test("renders content", () => {
    render(<Button>{textButton}</Button>);
    const button = screen.getByText(textButton);

    expect(button).toBeInTheDocument();
  });

  test("click the button", () => {
    render(<Button onClick={mockHandler}>{textButton}</Button>);
    const button = screen.getByText(textButton);

    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });

  test("button disabled state", () => {
    render(<Button disabled>{textButton}</Button>);

    expect(screen.getByText(textButton).getAttribute("disabled")).toBe("");
  });

  describe("display all button sizes", () => {
    Object.values(buttonSizes).forEach((size) => {
      test(`display button size '${size}'`, () => {
        const button = render(<Button size={size}>{textButton}</Button>);
        const findClassName = findSentence(size);
        const [className] = findClassName(button.container.innerHTML);

        expect(className).toEqual(size);
      });
    });
  });

  describe("display all button variant", () => {
    Object.values(buttonVariants).forEach((variant) => {
      test(`display button variant ${variant}`, () => {
        const button = render(<Button variant={variant}>{textButton}</Button>);
        const findClassName = findSentence(variant);
        const [className] = findClassName(button.container.innerHTML);

        expect(className).toEqual(variant);
      });
    });
  });
});
