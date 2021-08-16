import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders stock history header", () => {
  render(<App />);
  const linkElement = screen.getByText(/stock history/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders search bar", () => {
  render(<App />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
