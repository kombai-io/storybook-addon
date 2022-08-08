import React from "react";
const Section = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div
      style={{
        padding: "10px",
      }}
    >
      <div
        style={{
          fontSize: "20px",
          fontWeight: 600,
        }}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Section;
