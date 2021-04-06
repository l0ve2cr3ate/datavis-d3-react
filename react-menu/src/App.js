import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown";

const options = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "hamster", label: "Hamster" },
  { value: "parrot", label: "Parrot" },
  { value: "spider", label: "Spider" },
  { value: "goldfish", label: "Goldfish" },
];

const initialValue = options[2].value;

const App = () => {
  const [selectedValue, setSelectedValue] = useState(initialValue);

  console.log({ selectedValue });
  return (
    <div>
      <label style={{ marginRight: "15px" }} htmlFor="pet-select">
        Choose a pet:
      </label>
      <Dropdown
        options={options}
        id="pet-select"
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      />
    </div>
  );
};

export default App;
