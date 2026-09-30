import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onSearch(cityInput.trim());
      setCityInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="🔍 Enter city name (e.g., London, New Delhi)..."
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default SearchBar;
