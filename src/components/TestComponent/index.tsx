import React from "react";

type Props = {
  noPadding?: boolean;
  rounded?: boolean;
  className?: string;
};

export const TestComponent: React.FC<Props> = ({
  children,
  noPadding = false,
  rounded = false,
  className = "",
}) => (
  <div
    className={`flex ${noPadding ? "" : "p-6"} ${
      rounded ? "rounded-xl" : ""
    } ${className}`}
  >
    {children}
  </div>
);

export default TestComponent;
