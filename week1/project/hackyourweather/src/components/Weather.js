import React from 'react';

function Weather({ main, description }) {
  return (
    <div className='weather-div'>
      <h3 className='weather-type'>{main}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default Weather;
