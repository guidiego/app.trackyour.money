import React from "react";
import App from "~/pages/_app";
import { render, screen } from "@testing-library/react";
import { NextRouter } from "next/router";

export const Test: React.FC<{ foo: string }> = ({ foo }) => (
  <div className="test">{foo}</div>
);

const fakeRouter = {} as unknown as NextRouter;
describe("pages/App", () => {
  it("should render default", () => {
    const test = { foo: "bar" };
    render(<App router={fakeRouter} Component={Test} pageProps={test} />);

    const el = screen.getByText(test.foo);
    expect(el).toHaveClass("test");
  });
});
