import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Main } from ".";

describe("Main test", () => {
    test("It should be able to render Main", () => {
        const {getByTestId} = render(<Main />)

        expect(getByTestId("main-component")).toBeInTheDocument()
    })
})