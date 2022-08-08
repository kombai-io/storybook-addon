import { Args, ArgTypes } from "@storybook/components";

export type StoryNode = {
  id: string;
  args: Args;
  name: string;
  source: string;
  framework: string;
  component: {
    name: string;
    argTypes: ArgTypes;
    defaultProps: object;
  };
};
