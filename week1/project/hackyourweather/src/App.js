import React from 'react';
import './App.css';
import weatherData from './city-weather.json';
import City from './components/City';
import uuid from 'uuid';

// I assumed the temperature was in Kelvin and converted it to Celsius.
const kelvinToCelsius = kelvin => (kelvin < 0 ? kelvin : kelvin - 273.15);

function App() {
  function getTempAndLocation(data) {
    return [
      `min temp ${kelvinToCelsius(data.main.temp_min).toFixed(1)}`,
      `max temp: ${kelvinToCelsius(data.main.temp_max).toFixed(1)}`,
      `location: ${data.coord.lat}, ${data.coord.lon}`,
    ];
  }

  return (
    <div className="App">
      <header>
        <h1>Weather</h1>
      </header>
      {weatherData.map(data => (
        <City
          city={data.name}
          country={data.sys.country}
          main={data.weather[0].main}
          description={data.weather[0].description}
          features={getTempAndLocation(data)}
          key={uuid()}
        ></City>
      ))}
    </div>
  );
}

export default App;
