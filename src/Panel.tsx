import React, { useState, useEffect, useCallback } from "react";
import { useChannel, useStorybookApi } from "@storybook/api";
import { AddonPanel } from "@storybook/components";

import PanelContent from "./components/PanelContent";
import { EVENTS } from "./constants";
import { StoryNode } from "./types";

interface PanelProps {
  active: boolean;
}
function exposeDataInWindow(node: StoryNode, next: () => boolean) {
  window.__kb_sb__ = {
    story: node,
    next,
  };
}

export const Panel: React.FC<PanelProps> = (props) => {
  const [story, setStory] = useState<StoryNode | undefined>();
  const api = useStorybookApi();

  const nextStory = useCallback(() => {
    const { path: prevPath } = api.getUrlState();
    api.jumpToStory(1);
    const { path: nextPath } = api.getUrlState();
    return prevPath !== nextPath;
  }, []);

  useChannel({
    [EVENTS.STORY_META]: (info: StoryNode) => {
      setStory(info);
    },
  });

  useEffect(() => {
    if (story) exposeDataInWindow(story, nextStory);
  }, [story]);

  return (
    <AddonPanel {...props}>{story && <PanelContent {...story} />}</AddonPanel>
  );
};
