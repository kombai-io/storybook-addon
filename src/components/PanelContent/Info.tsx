import React from "react";
import { styled } from "@storybook/theming";
import { ArgsTable } from "@storybook/components";

import { StoryNode } from "../../types";

import Title from "./Title";
import Section from "./Section";
import Description from "./Description";
import StorySource from "./StorySource";
import StoryArgs from "./StoryArgs";
// import StoryRenderer from "./StoryRenderer";

const Wrapper = styled("div")({
  padding: "10px 0",
});
function Info(story: StoryNode) {
  return (
    <Wrapper>
      <Title>{story.name}</Title>
      <Description story={story} />

      <Section title="Component Props">
        <ArgsTable rows={story.component?.argTypes} />
      </Section>

      <Section title="Story">
        {/* <StoryRenderer id={story.id} /> */}
        <StorySource>{story.source}</StorySource>
        <StoryArgs args={story.args} />
      </Section>
    </Wrapper>
  );
}

export default Info;
