import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";

describe("Dashboard", () => {
  it("renders dashboard title", () => {
    render(<Dashboard />);
    expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
  });
});