import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

describe("Login Page", () => {
  it("renders inputs and button", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "Login" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Login" })
    ).toBeInTheDocument();
  });

  it("updates input values", () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;

    fireEvent.change(emailInput, {
      target: { value: "test@test.com" },
    });

    expect(emailInput.value).toBe("test@test.com");
  });
});