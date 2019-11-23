//import React from 'react';
import React, { useState } from 'react';

import Hobby from './Hobby';

function HobbyList({ hobbies }) {
  const [hobbyList] = useState(hobbies);
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby, index) => (
        <Hobby title={hobby.hobby} icon={hobby.icon} key={index}></Hobby>
      ))}
    </ul>
  );
}

export default HobbyList;
