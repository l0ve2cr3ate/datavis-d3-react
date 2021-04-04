import styles from "./AxisLeft.module.css";

const AxisLeft = ({ yScale }) =>
  yScale.domain().map((tickValue, i) => (
    <g className={styles.tick} key={i}>
      <text
        style={{ textAnchor: "end" }}
        dy={".31em"}
        x="-3"
        y={yScale(tickValue) + yScale.bandwidth() / 2}
      >
        {tickValue}
      </text>
    </g>
  ));

export default AxisLeft;
