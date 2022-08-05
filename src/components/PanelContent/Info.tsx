import React, { Fragment } from "react";
import { ArgsTable } from "@storybook/components";
import { styled } from "@storybook/theming";
import { StoryNode } from "../../types";

import Title from "./Title";
import Section from "./Section";
import Description from "./Description";
import StorySource from "./StorySource";
import StoryRenderer from "./StoryRenderer";

const Wrapper = styled("div")({
  padding: "10px 0",
});
const Info = (story: StoryNode) => {
  return (
    <Wrapper>
      <Title>{story.name}</Title>
      <Description>
        This story belongs to {story.component?.name}. Below some meta
        information of component and story
      </Description>

      <Section title="Component Props">
        <ArgsTable rows={story.component?.argTypes} />
      </Section>
      <Section title={"Story"}>
        <Fragment>
          <StoryRenderer id={story.id}></StoryRenderer>
          <StorySource>{story.source}</StorySource>
        </Fragment>
      </Section>
    </Wrapper>
  );
};

export default Info;
