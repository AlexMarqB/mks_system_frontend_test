import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from ".";

describe("Header test", () => {
  test("It should be able to render the Header correctly", () => {
    const { getByText } = render(<Header />);
  
    expect(getByText("MKS")).toBeInTheDocument();
  
    expect(getByText("Sistemas")).toBeInTheDocument();
  });
  
  test("It should be able to render the button correctly", () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId("cart-button")).toBeInTheDocument();

    const cartButton = getByTestId("cart-button")

    fireEvent.click(cartButton)

    expect(getByTestId("sidebar-container")).toBeInTheDocument()
  })
})
