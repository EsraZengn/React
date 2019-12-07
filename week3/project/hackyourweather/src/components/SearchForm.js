import React, { useState } from 'react';

function SearchForm({ onSubmit }) {
  const [city, setCity] = useState('');

  const handleCityEntry = event => {
    setCity(event.target.value);
  };

  const handleSubmit = event => {
    onSubmit(city);
    setCity('');
    event.preventDefault();
  };

  // This function is used to set submit button disabled or enabled.
  const setButtonClass = () => (city !== '' ? 'search-btn' : 'search-btn disabled');

  
  return (
    <form
    onSubmit={event => handleSubmit(event)}
    /* In order to prevent enter key being pressed when input field is empty, I added extra control for onKeyPress.*/
      onKeyPress={event => {
        event.key === 'Enter' && city === '' && event.preventDefault();
      }}
    >
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
          className={setButtonClass()}
          src="https://image.flaticon.com/icons/png/128/149/149852.png"
          alt="Not found"
        />
      </label>
    </form>
  );
}

export default SearchForm;
