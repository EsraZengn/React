import React from 'react';
import CityHeader from './CityHeader';
import Weather from './Weather';
import Features from './Features';

function City({ city, country, main, description, features }) {
  return (
    <section className="city-container">
      <CityHeader city={city} country={country}></CityHeader>
      <Weather main={main} description={description}></Weather>
      <Features features={features}></Features>
    </section>
  );
}

export default City;
