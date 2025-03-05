import "@testing-library/jest-dom";  
import { render, screen } from "@testing-library/react";
import Home from "../Home";

test("renders Crypto Assets title", () => {
  render(<Home />);
  const title = screen.getByText(/Crypto Assets/i);
  expect(title).toBeInTheDocument();  
});