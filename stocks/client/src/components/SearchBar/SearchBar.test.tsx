import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar Component", () => {
  test("renders search bar", () => {
    // Arrange
    render(<SearchBar />);

    // Assert
    const titleElement = screen.getByText(/search/i);
    expect(titleElement).toBeInTheDocument();
  });
});
