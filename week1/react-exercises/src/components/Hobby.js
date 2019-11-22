import React from 'react';

function Hobby({ title, key }) {
  return <li key={key}>{title}</li>;
}

export default Hobby;
