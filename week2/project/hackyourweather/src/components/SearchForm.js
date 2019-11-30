import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleCityEntry = event => {
    setCity(event.target.value);
  };

  const handleSubmit = event => {
    onSubmit(city);
    event.preventDefault();
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <label className="city-label">
        <input
          className="city-input"
          name="city"
          type="text"
          onChange={event => handleCityEntry(event)}
          value={city}
          placeholder="Search city"
        />
        <input
          type="image"
          className="search-btn"
          src="https://image.flaticon.com/icons/png/128/149/149852.png"
          alt="Not found"
        />
      </label>
    </form>
  );
}

export default SearchForm;
