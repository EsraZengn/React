import React from 'react';

function Hobby({ title, icon }) {
  return (
    <li>
      <img src={icon} alt={'Not found'}></img>
      {title}
    </li>
  );
}

export default Hobby;
