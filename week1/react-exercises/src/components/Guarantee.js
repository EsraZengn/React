import React from 'react';

function Guarantee(props) {
  return (
    <div className="guarantee">
      <img className='guarantee-img' src={props.feature.image} alt="Not found"></img>
      <h2>{props.feature.title}</h2>
      <p>{props.feature.description}</p>
    </div>
  );
}

export default Guarantee;