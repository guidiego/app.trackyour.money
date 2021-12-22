import React from "react";
import Index from "~/pages";
import { render, screen } from "@testing-library/react";

describe("components/Index", () => {
  it("should render default", () => {
    render(<Index query={{ offset: 10, limit: 10 }} />);

    const el = screen.getByText("HomePage");
    expect(el).toHaveClass("flex p-6");
  });
});
