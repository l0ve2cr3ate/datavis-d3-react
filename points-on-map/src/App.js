import "./App.css";

import Marks from "./Marks";
import { useWorldAtlas } from "./useWorldAtlas";
import { useCities } from "./useCities";
import { max } from "d3";
import { scaleSqrt } from "d3-scale";

const width = 960;
const height = 500;

const App = () => {
  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) {
    return <pre className="data">Loading data</pre>;
  }

  const maxRadius = 15;
  const sizeValue = (d) => d.population;
  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};

export default App;
