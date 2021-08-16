import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  test("renders header title", () => {
    // Arrange
    render(<Header title={"Stock History"} />);

    // Assert
    const headerElement = screen.getByText(/stock history/i);
    expect(headerElement).toBeInTheDocument();
  });
});
