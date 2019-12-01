import React, { useState } from 'react';
import './App.css';
import City from './components/City';
import SearchForm from './components/SearchForm';
import uuid from 'uuid';

// I assumed the temperature was in Kelvin and converted it to Celsius.
const kelvinToCelsius = kelvin => (kelvin < 0 ? kelvin : kelvin - 273.15);

function App() {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const isObjectEmpty = obj => Object.getOwnPropertyNames(obj).length < 1;

  function getTempAndLocation(data) {
    return [
      `min temp: ${kelvinToCelsius(data.main.temp_min).toFixed(1)}`,
      `max temp: ${kelvinToCelsius(data.main.temp_max).toFixed(1)}`,
      `location: ${data.coord.lat}, ${data.coord.lon}`,
    ];
  }

  const getCityWeather = city => {
    if (city !== '') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      )
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not fetch weather');
          }

          return response.json();
        })
        .then(weather => {
          setWeatherInfo(weather);
          setErrorMessage('');
        })
        .catch(err => {
          setErrorMessage(err.message);
          console.log(err);
        });
    } else {
      setErrorMessage('Enter a valid city!');
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Weather</h1>
      </header>
      <SearchForm onSubmit={city => getCityWeather(city)} />
      {errorMessage ? (
        <div className="error-div">{errorMessage}</div>
      ) : isObjectEmpty(weatherInfo) ? (
        <div className='search-city-div'>Search for a city to display weather info</div>
      ) : (
        <City
          city={weatherInfo.name}
          country={weatherInfo.sys.country}
          main={weatherInfo.weather[0].main}
          description={weatherInfo.weather[0].description}
          features={getTempAndLocation(weatherInfo)}
          key={uuid()}
        />
      )}
    </div>
  );
}

export default App;
