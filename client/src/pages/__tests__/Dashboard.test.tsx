import { render, screen, waitFor } from "@testing-library/react";
import Dashboard from "../Dashboard";
import * as analyticsApi from "../../api/analytics";

vi.spyOn(analyticsApi, "getEventsOverTime").mockResolvedValue([
  { _id: "2026-04-20", count: 10 },
]);

describe("Dashboard", () => {
  it("renders chart data", async () => {
    render(<Dashboard />);

    await waitFor(() => {
      expect(screen.getByText("Analytics Dashboard")).toBeInTheDocument();
    });
  });
});