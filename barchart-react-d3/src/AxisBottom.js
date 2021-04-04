import styles from "./AxisBottom.module.css";

const AxisBottom = ({ xScale, innerHeight, tickFormat }) =>
  xScale.ticks().map((tickValue) => (
    <g
      className={styles.tick}
      key={tickValue}
      transform={`translate(${xScale(tickValue)},0)`}
    >
      <line
        // because x1 y1 and x2 are 0 they could be removed
        // x1={0}
        // y1={0}
        // x2={0}
        y2={innerHeight}
      />
      <text style={{ textAnchor: "middle" }} dy={"0.71rem"} y={innerHeight + 3}>
        {tickFormat(tickValue)}
      </text>
    </g>
  ));

export default AxisBottom;
