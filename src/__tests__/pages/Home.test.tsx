import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("renders home search page", () => {
  test("renders search input", () => {
    render(<Home />);
    const linkElement = screen.getByPlaceholderText("Search for users");
    expect(linkElement).toBeInTheDocument();
  });
});
