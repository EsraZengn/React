import React from 'react';
import CityHeader from './CityHeader';
import Weather from './Weather';
import Features from './Features';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

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

function getTempAndLocation(data) {
  return [
    `min temp: ${data.main.temp_min}`,
    `max temp: ${data.main.temp_max}`,
    `location: ${data.coord.lat}, ${data.coord.lon}`,
  ];
}

function City({ weather, handleCityWeatherRemove }) {
  const styles = useStyles();

  return (
    <div className={styles.cityContainer} key={weather.id}>
      <CloseIcon className={styles.closeBtn} onClick={() => handleCityWeatherRemove(weather.id)} />
      <Link to={`/${weather.id}`}>
        <section className="city-container">
          <CityHeader city={weather.name} country={weather.sys.country}></CityHeader>
          <Weather
            main={weather.weather[0].main}
            description={weather.weather[0].description}
          ></Weather>
          <Features features={getTempAndLocation(weather)}></Features>
        </section>
      </Link>
    </div>
  );
}

export default City;
