import React from 'react';
import './App.css';
import Home from './pages/Home';
import CityWeatherDetails from './pages/CityWeatherDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:cityId">
          <CityWeatherDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
