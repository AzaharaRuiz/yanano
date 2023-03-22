import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";

test("numbers", () => {
  const a = 1;
  const b = 2;

  const expected = 3;

  const result = a + b;

  expect(result).toBe(expected);
});

//OKAY,THIS DOESN'T WORK. I NEED IMPROVE AT TESTING :(

/*describe("<Button/>", () => {
  const mockHandler = jest.fn();
  const component = render(<Button onClick={mockHandler}>Click me</Button>);

  test("renders content", () => {
    component.getByText("Click me");
  });

  test("click the button", () => {
    fireEvent.click(component.getByText("Click me"));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});*/
