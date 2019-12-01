import React, { useState } from 'react';
import Button from './Button';
import FriendProfile from './FriendProfile';

function Friend() {
  const [friend, setFriend] = useState({});

  const getFriend = () => {
    fetch('https://www.randomuser.me/api?results=1')
      .then(response => {
        if (!response.ok) {
          throw new Error("couldn't fetch friend");
        }
        return response.json();
      })
      .then(({ results }) => {
        setFriend(results[0]);
      })
      .catch(err => console.error(err));
  };
  return (
    <div className='exercise-div'>
      <Button getFriend={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
}

export default Friend;
