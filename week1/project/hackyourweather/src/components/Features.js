import React from 'react';

function Features({ features }) {
  return (
    <div>
      <ul>
        {features.map(feature => (
          <li>{`${Object.keys(feature)}: ${Object.values(feature)}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
