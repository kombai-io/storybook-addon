import React from "react";
import { Story as RawStory } from "@storybook/components";

const Story = ({ id }: { id: string }) => {
  return <RawStory id={id}></RawStory>;
};

export default Story;
