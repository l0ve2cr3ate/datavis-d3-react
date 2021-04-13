import styles from "./AxisLeft.module.css";

const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue, i) => (
    <g
      className={styles.tick}
      key={i}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      <text style={{ textAnchor: "end" }} dy={".31em"} x={-tickOffset}>
        {tickValue}
      </text>
    </g>
  ));

export default AxisLeft;
