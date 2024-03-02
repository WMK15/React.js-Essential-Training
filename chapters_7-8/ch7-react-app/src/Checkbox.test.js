import { fireEvent, render } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("Selecting the checkbox should change the value of checked to true", () => {
  // get the getByLabelText function from the render function
  const { getByLabelText } = render(<Checkbox />);
  // get the checkbox element by its label text
  const checkbox = getByLabelText(/not checked/i);
  // simulate a click event on the checkbox
  fireEvent.click(checkbox);
  // assert that the checkbox is checked
  expect(checkbox.checked).toEqual(true);
});
