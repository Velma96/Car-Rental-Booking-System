import React, { useState } from "react";
import "../styles/FilterPanel.css";

const FilterPanel = ({ onFilterChange }) => {
  const [type, setType] = useState("");
  const [price, setPrice] = useState(100);

  const handleTypeChange = (e) => {
    setType(e.target.value);
    onFilterChange(e.target.value, price);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onFilterChange(type, e.target.value);
  };

  return (
    <div className="filter-panel">
      <label>
        Type:
        <select value={type} onChange={handleTypeChange}>
          <option value="">All</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
      </label>
      <label>
        Price Range:
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={handlePriceChange}
        />
        <span>${price}</span>
      </label>
    </div>
  );
};

export default FilterPanel;

