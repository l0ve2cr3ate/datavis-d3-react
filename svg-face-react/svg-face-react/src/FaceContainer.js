import React from "react";

const FaceContainer = ({ children, width, height, centerX, centerY }) => (
  <svg width={width} height={height}>
    {/* Center face + all elements in it on the page */}
    <g transform={`translate(${centerX}, ${centerY})`}>{children}</g>
  </svg>
);

export default FaceContainer;
