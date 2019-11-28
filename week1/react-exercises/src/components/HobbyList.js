import React, { useState } from 'react';
import Hobby from './Hobby';
import uuid from 'uuid';

function HobbyList({ hobbies }) {
  const [hobbyList] = useState(hobbies);
  return (
    <ul className="hobby-list">
      {hobbyList.map(hobby => (
        <Hobby title={hobby.hobby} icon={hobby.icon} key={uuid()}></Hobby>
      ))}
    </ul>
  );
}

export default HobbyList;
