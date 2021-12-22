import React from "react";
import TestComponent from "~/components/TestComponent";
import { render, screen } from "@testing-library/react";
import {
  Default,
  NoPadding,
  Rounded,
  WithAllSettings,
} from "~/components/TestComponent/TestComponent.stories";

describe("components/TestComponent", () => {
  it("should render default", () => {
    render(<TestComponent {...Default.args} />);

    const el = screen.getByText(Default.args.children);
    expect(el).toHaveClass("flex");
    expect(el).toHaveClass("p-6");
    expect(el).not.toHaveClass("rounded-xl");
  });

  it("should render with noPadding", () => {
    render(<TestComponent {...NoPadding.args} />);

    const el = screen.getByText(NoPadding.args.children);
    expect(el).toHaveClass("flex");
    expect(el).not.toHaveClass("p-6");
    expect(el).not.toHaveClass("rounded-xl");
  });

  it("should render with rounded", () => {
    render(<TestComponent {...Rounded.args} />);

    const el = screen.getByText(Rounded.args.children);
    expect(el).toHaveClass("flex");
    expect(el).toHaveClass("rounded-xl");
    expect(el).toHaveClass("p-6");
  });

  it("should render with all settings", () => {
    render(<TestComponent {...WithAllSettings.args} />);

    const el = screen.getByText(WithAllSettings.args.children);
    expect(el).toHaveClass("flex");
    expect(el).toHaveClass("p-6");
    expect(el).toHaveClass("rounded-xl");
    expect(el).toHaveClass(WithAllSettings.args.className);
  });
});
