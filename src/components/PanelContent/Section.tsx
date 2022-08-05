import React from "react";
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactChild;
}) => {
  return (
    <div
      style={{
        borderRadius: "5px",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          padding: "4px",
          fontSize: "16px",
          fontWeight: 460,
          marginBottom: "-15px",
        }}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
