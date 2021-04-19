import styles from "./Marks.module.css";
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

const Marks = ({ data: { land, interiors } }) => (
  <g className={styles.marks}>
    <path className={styles.sphere} d={path({ type: "Sphere" })} />
    <path className={styles.graticules} d={path(graticule())} />
    {land.features.map((feature, i) => (
      <path className={styles.land} key={i} d={path(feature)} />
    ))}
    <path className={styles.interiors} d={path(interiors)} />
  </g>
);

export default Marks;
