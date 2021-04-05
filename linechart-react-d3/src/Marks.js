import styles from "./Marks.module.css";
import { curveNatural, line } from "d3";

const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  circleRadius = 10,
}) => (
  <g className={styles.marks}>
    {/* Line */}
    <path
      fill="none"
      stroke="black"
      d={line()
        .curve(curveNatural)
        .x((d) => xScale(xValue(d)))
        .y((d) => yScale(yValue(d)))(data)}
    />
    {/* points on the line */}
    {data.map((d, i) => (
      <circle
        key={i}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </circle>
    ))}
  </g>
);

export default Marks;
