import React from 'react';
import uuid from 'uuid';

function Hobby({ title, icon }) {
  return (
    <li key={uuid()}>
      <img src={icon} alt={'Not found'}></img>
      {title}
    </li>
  );
}

export default Hobby;
