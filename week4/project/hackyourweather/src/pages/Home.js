import React, { useState } from 'react';
import City from '../components/City';
import SearchForm from '../components/SearchForm';
import { Typography } from '@material-ui/core';

function Home() {
  const [weatherList, setWeatherList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getCityWeather = async city => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!response.ok) {
        throw new Error('Could not fetch weather');
      }
      const weather = await response.json();
      const previousWeatherList = weatherList.filter(weatherItem => weatherItem.id !== weather.id);
      setWeatherList([weather, ...previousWeatherList]);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const removeCityWeather = id => setWeatherList(weatherList.filter(weather => weather.id !== id));

  return (
    <div className="App">
      <Typography variant="h3" component="h4" align="center" gutterBottom>
        Weather
      </Typography>
      <SearchForm onSubmit={city => getCityWeather(city)} />
      {errorMessage ? (
        <div className="error-div">{errorMessage}</div>
      ) : weatherList.length === 0 ? (
        <div className="search-city-div">Search for a city to display weather info</div>
      ) : (
        weatherList.map(weatherInfo => {
          return (
            <City
              key={weatherInfo.id}
              weather={weatherInfo}
              handleCityWeatherRemove={cityId => removeCityWeather(cityId)}
            />
          );
        })
      )}
    </div>
  );
}

export default Home;
