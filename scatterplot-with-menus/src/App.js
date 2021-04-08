import { scaleLinear, extent, format, scaleOrdinal } from "d3";
import "./App.css";
import AxisBottom from "./AxisBottom";
import AxisLeft from "./AxisLeft";
import Marks from "./Marks";
import { useData } from "./useData";
import ReactDropdown from "react-dropdown";
import { useState } from "react";
import "react-dropdown/style.css";

const width = 960;
const height = 500;

// Use margin to create room for axis
const margin = { top: 20, right: 30, bottom: 75, left: 125 };
const xAxisLabelOffset = 60;
const yAxisLabelOffset = 50;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.right - margin.left;

const attributes = [
  { value: "sepal_length", label: "Sepal Length" },
  { value: "sepal_width", label: "Sepal Width" },
  { value: "petal_length", label: "Petal Length" },
  { value: "petal_width", label: "Petal Width" },
  { value: "species", label: "Species" },
];

const getLabel = (value) => {
  const obj = attributes.find((attribute) => attribute.value === value);
  return obj.label;
};

const App = () => {
  const data = useData();

  const initialXAttribute = "petal_length";
  const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xValue = (d) => d[xAttribute];
  const xAxisLabel = getLabel(xAttribute);

  const initialYAttribute = "sepal_width";
  const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yValue = (d) => d[yAttribute];
  const yAxisLabel = getLabel(yAttribute);

  const colorValue = (d) => d.species;

  if (!data) {
    return <pre className="data">Loading data</pre>;
  }

  const xScale = scaleLinear()
    .domain(extent(data, xValue)) // from min to max
    .range([0, innerWidth])
    .nice(); // .nice() creates nice ending point numbers

  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

  const colorScale = scaleOrdinal()
    .domain(data.map(colorValue))
    .range(["#E6842A", "#137B80", "#8E6C8A"]);

  const siFormat = format(".2s");
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace("G", "B");

  return (
    <>
      <div className="menu-container">
        <label className="x-label" htmlFor="x-select">
          Select x
        </label>
        <ReactDropdown
          className="dropdown"
          options={attributes}
          value={xAttribute}
          onChange={({ value }) => setXAttribute(value)}
        />

        <label className="y-label" htmlFor="y-select">
          Select y
        </label>
        <ReactDropdown
          className="dropdown"
          options={attributes}
          value={yAttribute}
          onChange={({ value }) => setYAttribute(value)}
        />
      </div>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={5}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>

          <AxisLeft yScale={yScale} innerWidth={innerWidth} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            colorScale={colorScale}
            xValue={xValue}
            yValue={yValue}
            colorValue={colorValue}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </>
  );
};

export default App;
