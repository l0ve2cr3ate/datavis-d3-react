import { useEffect, useState } from "react";
import { csv, arc, pie } from "d3";
import "./App.css";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre className="data">Loading data</pre>;
  }

  const colorPie = pie().value(1);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d, i) => (
          <path
            key={`${d.data["RGB hex value"]}-${i}`}
            fill={d.data["RGB hex value"]}
            d={pieArc(d)}
          />
        ))}

        {/* Without using .pie() from d3:
        {data.map((d, i) => (
          <path
            key={`${d["RGB hex value"]}-${i}`}
            fill={d["RGB hex value"]}
            d={pieArc({
              startAngle: (i / data.length) * 2 * Math.PI,
              endAngle: ((i + 1) / data.length) * 2 * Math.PI,
            })}
          />
        ))} */}
      </g>
    </svg>
  );
};

export default App;
