import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CartButton } from ".";

describe("CartButton test", () => {
  test("renders CartButton with sidebar opened", () => {
    const { getByTestId, getByText, getByAltText, queryByTestId } = render(<CartButton />);

    expect(getByAltText("shopping cart")).toBeInTheDocument();
    expect(getByText("0")).toBeInTheDocument();

    expect(queryByTestId("sidebar-component")).toBeNull();
    fireEvent.click(getByTestId("cart-button"));
  });
  
});
