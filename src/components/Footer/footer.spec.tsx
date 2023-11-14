import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from ".";

describe("Footer test", () => {
    test("It should able to render the text correctly", () => {
        const {getByText} = render(<Footer />)

        expect(getByText("MKS sistemas © Todos os direitos reservados")).toBeInTheDocument()
    })
})