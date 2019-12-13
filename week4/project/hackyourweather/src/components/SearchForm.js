import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

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

  return (
    <form
      onKeyPress={event => {
        event.key === 'Enter' && city !== '' && handleSubmit(event);
      }}
    >
      <TextField
        onChange={event => handleCityEntry(event)}
        label="Search city"
        variant="outlined"
        value={city}
        required
      />
      <Button
        variant="contained"
        disabled={city === '' ? true : false}
        color="primary"
        onClick={event => handleSubmit(event)}
        startIcon={<SearchIcon />}
      >
        Search
      </Button>
    </form>
  );
}

export default SearchForm;
