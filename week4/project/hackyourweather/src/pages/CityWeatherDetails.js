import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../components/TabPanel';
import { Link } from 'react-router-dom';
import { Fab } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '30px',
    },
    marginTop: '10px',
    marginLeft: '5%',
    position: 'relative',
  },
  appbar: {
    [theme.breakpoints.down('md')]: {
      width: '50%',
      marginLeft: '25%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      marginLeft: '10%',
    },
    width: '40%',
    marginLeft: '30%',
    marginTop: '50px',
    position: 'relative',
  },
  fab: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      bottom: theme.spacing(1),
      right: theme.spacing(2),
    },
    [theme.breakpoints.up('sm')]: {
      margin: 0,
      left: 5,
      top: 30,
      width: 90,
    },
  },
}));

function CityWeatherDetails() {
  const classes = useStyles();

  const [tabValue, setTabValue] = useState(0);
  const [city, setCity] = useState({});
  const [forecast, setForecast] = useState([]);
  const { cityId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&apikey=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(`Couldn't fetch 5 days/3 hour forecast data`);
        }
        return res.json();
      })
      .then(data => {
        setForecast(data.list);
        setCity(data.city);
      })
      .catch(err => {
        console.error(err);
      });
  }, [cityId]);

  const setForecastData = tabIndex => {
    if (tabIndex === 0) {
      const hourly = forecast.slice(0, 6);
      return hourly;
    } else {
      return forecast;
    }
  };

  const handleChange = (event, newTabValue) => {
    setTabValue(newTabValue);
  };

  return (
    <div className={classes.container}>
      <Fab variant="extended" color="primary" component={Link} to="/" className={classes.fab}>
        <ArrowBackOutlinedIcon />
        Back
      </Fab>
      <Typography variant="h3" component="h4" align="center" gutterBottom>
        {city.name}, {city.country}
      </Typography>
      <div className={classes.appbar}>
        <AppBar position="relative" color="default">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Hourly Forecast" />
            <Tab label="5 Day Forecast" />
          </Tabs>
        </AppBar>
      </div>
      <TabPanel value={tabValue} index={0} forecastData={setForecastData(tabValue)} />
      <TabPanel value={tabValue} index={1} forecastData={setForecastData(tabValue)} />
    </div>
  );
}

export default CityWeatherDetails;
