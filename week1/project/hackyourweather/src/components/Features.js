import React from 'react';
import uuid from 'uuid';

function Features({ features }) {
  return (
    <div>
      <ul>
        {features.map(feature => (
          <li key={uuid()}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
