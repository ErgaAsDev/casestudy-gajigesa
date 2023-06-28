import React from "react";
import { render, screen, fireEvent, queryByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AccountContainer from "./AccountContainer";

describe("AccountContainer", () => {
  const accounts = [
    {
      id: 0,
      name: "Akun Gaji",
      color: "#fff",
      gaji: 100,
    },
    {
      id: 1,
      name: "Account 1",
      color: "rgb(255, 0, 0)",
      gaji: 500012,
    },
    {
      id: 2,
      name: "Account 2",
      color: "rgb(255, 128, 0)",
      gaji: 1500012,
    },
    {
      id: 3,
      name: "Account 3",
      color: "rgb(255, 255, 0)",
      gaji: 800012,
    },
    {
      id: 4,
      name: "Account 4",
      color: "rgb(128, 255, 0)",
      gaji: 200012,
    },
    {
      id: 5,
      name: "Account 5",
      color: "rgb(0, 255, 0)",
      gaji: 1000012,
    },
    {
      id: 6,
      name: "Account 6",
      color: "rgb(0, 255, 128)",
      gaji: 50012,
    },
    {
      id: 7,
      name: "Account 7",
      color: "rgb(0, 255, 255)",
      gaji: 30012,
    },
  ];

  test("renders AccountContainer component", () => {
    render(<AccountContainer accounts={accounts} />);

    // Assert that the component renders without errors
    const dropdownElement = screen.getByTestId("dropdown-component");
    expect(dropdownElement).toBeInTheDocument();
  });

  test("updates selected number when input value changes", () => {
    render(<AccountContainer accounts={accounts} />);

    // Simulate user interaction by firing the input event on the input element
    const salaryInput = screen.getByTestId("salary-input");
    fireEvent.input(salaryInput, { target: { value: "1000" } });

    // Assert that the input element value has been updated
    expect(salaryInput.value).toBe("1000");
  });

  test("updates selected number when option is selected", () => {
    render(<AccountContainer accounts={accounts} />);

    // Find the select element by role
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "Account 1" } });

    // Assert that the selected number is updated based on the selected option
    const selectedNumberElement = screen.getByTestId("salary-input");
    expect(selectedNumberElement.value).toBe("500012");
  });
});
