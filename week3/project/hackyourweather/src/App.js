import React, { useState } from 'react';
import './App.css';
import City from './components/City';
import SearchForm from './components/SearchForm';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

// I assumed the temperature was in Kelvin and converted it to Celsius.
const kelvinToCelsius = kelvin => (kelvin < 0 ? kelvin : kelvin - 273.15);
const useStyles = makeStyles(theme => ({
  closeBtn: {
    position: 'absolute',
    right: '20px',
    top: '20px',
  },
  cityContainer: {
    position: 'relative',
    marginTop: '50px',
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '50%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
    },
  },
}));

function App() {
  const styles = useStyles();
  const [weatherList, setWeatherList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  function getTempAndLocation(data) {
    return [
      `min temp: ${kelvinToCelsius(data.main.temp_min).toFixed(1)}`,
      `max temp: ${kelvinToCelsius(data.main.temp_max).toFixed(1)}`,
      `location: ${data.coord.lat}, ${data.coord.lon}`,
    ];
  }

  const getCityWeather = city => {
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
        const previousWeatherList = weatherList.filter(
          weatherItem => weatherItem.id !== weather.id,
        );
        setWeatherList([weather, ...previousWeatherList]);
        setErrorMessage('');
      })
      .catch(err => {
        setErrorMessage(err.message);
        console.log(err);
      });
  };

  const removeCityWeather = id => {
    const remainingCities = weatherList.filter(weather => weather.id !== id);
    setWeatherList(remainingCities);
  };

  return (
    <div className="App">
      <header>
        <h1>Weather</h1>
      </header>
      <SearchForm onSubmit={city => getCityWeather(city)} />
      {errorMessage ? (
        <div className="error-div">{errorMessage}</div>
      ) : weatherList.length === 0 ? (
        <div className="search-city-div">Search for a city to display weather info</div>
      ) : (
        weatherList.map(weatherInfo => {
          return (
            <div className={styles.cityContainer} key={weatherInfo.id}>
              <CloseIcon
                className={styles.closeBtn}
                onClick={() => removeCityWeather(weatherInfo.id)}
              />
              <City
                city={weatherInfo.name}
                country={weatherInfo.sys.country}
                main={weatherInfo.weather[0].main}
                description={weatherInfo.weather[0].description}
                features={getTempAndLocation(weatherInfo)}
              />
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
