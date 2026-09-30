import React from 'react';

function FilterPanel({ search, setSearch, selectedDept, setSelectedDept, departments }) {
  return (
    <div className="filter-panel">
      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search by Name or Employee ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="filter-box">
        <label htmlFor="dept-select">Department: </label>
        <select
          id="dept-select"
          value={selectedDept}
          onChange={(e) => setSelectedDept(e.target.value)}
        >
          <option value="All">All Departments</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterPanel;
