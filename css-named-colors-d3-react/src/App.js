import { useEffect, useState } from "react";
import { csv } from "d3";
import "./App.css";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  if (!data) {
    return <pre className="data">Loading data</pre>;
  }

  return data.map((d, i) => (
    <div
      key={`${d["RGB hex value"]}-${i}`}
      style={{
        backgroundColor: d["RGB hex value"],
        width: "960px",
        height: "5px",
      }}
    />
  ));
};

export default App;
