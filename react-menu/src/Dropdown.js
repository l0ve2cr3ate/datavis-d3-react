import React from "react";

const Dropdown = ({ options, id, selectedValue, onSelectedValueChange }) => (
  <select
    id={id}
    onChange={(event) => onSelectedValueChange(event.target.value)}
    defaultValue={selectedValue}
  >
    {options.map(({ value, label }, i) => (
      <option key={i} value={value}>
        {label}
      </option>
    ))}
  </select>
);

export default Dropdown;
