import React, { useMemo } from "react";
import { styled } from "@storybook/theming";
import { TabsState } from "@storybook/components";
import ReactJson from "react-json-view";

import Info from "./Info";

import { StoryNode } from "../../types";

const Wrapper = styled("div")({
  padding: "10px 0",
  height: "100%",
});

function PanelContent(props: StoryNode) {
  const panels = useMemo(
    () => ({
      docs: {
        title: "Docs",
        render: ({ active, key }: { active: boolean; key: string }) =>
          active ? (
            <div id="kb-docs" key={key} style={{ margin: "15px" }}>
              <Info {...props} />
            </div>
          ) : null,
      },
      json: {
        title: "JSON",
        render: ({ active, key }: { active: boolean; key: string }) =>
          active ? (
            <div key={key} id="kb-json" style={{ margin: "15px" }}>
              <ReactJson src={props} />
            </div>
          ) : null,
      },
    }),
    [props]
  );

  return (
    <Wrapper>
      <TabsState initial="json" absolute>
        {Object.entries(panels).map(([k, v]) => (
          <div key={k} id={k} title={v.title} style={{ height: "100%" }}>
            {v.render}
          </div>
        ))}
      </TabsState>
    </Wrapper>
  );
}

export default PanelContent;
