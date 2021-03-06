import styles from "./Marks.module.css";

const Marks = ({ data, xScale, yScale, xValue, yValue, tooltipFormat }) =>
  data.map((d) => (
    <rect
      className={styles.mark}
      key={yValue(d)}
      x={0}
      y={yScale(yValue(d))}
      width={xScale(xValue(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ));

export default Marks;
