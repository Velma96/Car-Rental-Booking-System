import React from 'react';
import '../styles/FilterPanel.css';

const FilterPanel = () => {
  return (
    <div className="filter-panel">
      <label>
        Type:
        <select>
          <option value="">All</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
      </label>
      <label>
        Price Range:
        <input type="range" min="0" max="100" />
      </label>
    </div>
  );
};

export default FilterPanel;
