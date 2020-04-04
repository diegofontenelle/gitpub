import React from "react"
import App from "./App"
import { render, fireEvent } from "@testing-library/react"

describe("<App />", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<App />)

    expect(getByTestId("app")).toBeDefined()
  })
  it("should fire callback on button click", () => {
    const callback = jest.fn()
    const { getByTestId } = render(<App callback={callback} />)

    fireEvent.click(getByTestId("app-button"))

    expect(callback).toHaveBeenCalledTimes(1)
  })
})
