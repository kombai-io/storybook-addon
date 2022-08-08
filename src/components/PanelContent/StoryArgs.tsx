import { styled } from "@storybook/theming";
import React from "react";

const StyleTable = styled("table")({
  borderCollapse: "collapse",
  borderSpacing: 0,
  color: "#333333",
  fontSize: "13px",
  lineHeight: "20px",
  textAlign: "left",
  width: "100%",
  marginTop: "25px",
  marginBottom: "40px",
  marginLeft: "1px",
  marginRight: "1px",
});

const StyleThead = styled("thead")({});

const StyleBody = styled("tbody")({
  boxShadow: "rgb(0 0 0 / 10%) 0 1px 3px 1px, rgb(0 0 0 / 7%) 0 0 0 1px",
  borderRadius: "4px",
});
//todo css need to improved

const StoryArgs = ({ args }: { args: object }) => {
  return (
    <StyleTable aria-hidden="false" className="docblock-argstable sto-tm6i3o">
      <StyleThead className="docblock-argstable-head">
        <tr>
          <th>
            <span>Name</span>
          </th>
          <th>
            <span>Value</span>
          </th>
        </tr>
      </StyleThead>
      <StyleBody className="docblock-argstable-body">
        {Object.entries(args).map(([name, value]: [string, any]) => (
          <tr key={name}>
            <td>
              <span>{name}</span>
            </td>
            <td>
              <span>{value || "-"}</span>
            </td>
          </tr>
        ))}
      </StyleBody>
    </StyleTable>
  );
};

export default StoryArgs;
