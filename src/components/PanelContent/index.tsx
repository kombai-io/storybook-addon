import React, { useMemo } from "react";
import { styled } from "@storybook/theming";
import { TabsState } from "@storybook/components";
import ReactJson from "react-json-view";
import { ErrorBoundary } from "react-error-boundary";

import Info from "./Info";
import ErrorFallback from "./ErrorFallback";

import { StoryNode } from "../../types";

const Wrapper = styled("div")({
  padding: "10px 0",
  height: "100%",
});

export const PanelContent: React.FC<StoryNode> = (props) => {
  const panels = useMemo(() => {
    return {
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
    };
  }, [props]);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Wrapper>
        <TabsState initial="json" absolute={true}>
          {Object.entries(panels).map(([k, v]) => (
            <div key={k} id={k} title={v.title} style={{ height: "100%" }}>
              {v.render}
            </div>
          ))}
        </TabsState>
      </Wrapper>
    </ErrorBoundary>
  );
};
