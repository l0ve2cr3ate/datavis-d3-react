const Marks = ({
  data,
  xScale,
  yScale,
  colorScale,
  xValue,
  yValue,
  colorValue,
  tooltipFormat,
  circleRadius = 10,
}) =>
  data.map((d, i) => (
    <circle
      key={i}
      fill={colorScale(colorValue(d))}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));

export default Marks;
