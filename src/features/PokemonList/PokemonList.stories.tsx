import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import PurePokemonList from "./PurePokemonList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Feature/PokemonList",
  component: PurePokemonList,
} as ComponentMeta<typeof PurePokemonList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PurePokemonList> = (args) => (
  <PurePokemonList {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  results: [{ name: "bulbasaur" }, { name: "chalizard" }],
};
