import React, { useEffect, useState } from "react";
import { csv } from "d3";
import "./App.css";
import { message } from "./message";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/acd2b8cecfe51c520622fbaf407ee88b8796bfc6/cssNamedColors.csv";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(csvUrl).then(setData);
  }, []);

  return <pre className="data">{data ? message(data) : "Loading data..."}</pre>;
};

export default App;
