import React from "react";
import { StoryNode } from "../../types";

const Description = ({ story }: { story: StoryNode }) => {
  return (
    <p>
      This story belongs to <b>{story.component?.name}</b> component. Below is
      the information of component and story extracted by Kombai.
    </p>
  );
};

export default Description;
