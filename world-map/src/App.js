import "./App.css";

import Marks from "./Marks";
import { useData } from "./useData";

const width = 960;
const height = 500;

const App = () => {
  const data = useData();

  if (!data) {
    return <pre className="data">Loading data</pre>;
  }

  return (
    <svg width={width} height={height}>
      <Marks data={data} />
    </svg>
  );
};

export default App;
