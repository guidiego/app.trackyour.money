import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TestComponent from "./";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/TestComponent",
  component: TestComponent,
} as ComponentMeta<typeof TestComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TestComponent> = (args) => (
  <TestComponent {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: "Test Default",
};

export const NoPadding = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoPadding.args = {
  children: "Test No Padding",
  noPadding: true,
};

export const Rounded = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Rounded.args = {
  children: "Test Rounded",
  rounded: true,
};

export const WithAllSettings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAllSettings.args = {
  children: "Test With All Settings",
  rounded: true,
  className: "bg-green-500",
};
