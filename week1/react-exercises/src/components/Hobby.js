import React from 'react';

function Hobby({ title, icon, key }) {
  return (
    <li key={key}>
      <img src={icon}></img>
      {title}
    </li>
  );
}

export default Hobby;
