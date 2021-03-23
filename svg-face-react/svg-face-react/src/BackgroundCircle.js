import React from "react";

const BackgroundCircle = ({ radius, strokeWidth }) => {
  return (
    <circle r={radius} fill="yellow" stroke="black" strokeWidth={strokeWidth} />
  );
};

export default BackgroundCircle;
