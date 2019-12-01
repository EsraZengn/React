import React from 'react';
import uuid from 'uuid';

function FriendProfile({ friend }) {
  const isObjectEmpty = obj => Object.getOwnPropertyNames(obj).length < 1;

  return (
    <div>
      {isObjectEmpty(friend) ? (
        ''
      ) : (
        <ul>
          <li key={uuid()}>{`${friend.name.first} ${friend.name.last}`}</li>
          <li
            key={uuid()}
          >{`${friend.location.street.name} ${friend.location.street.number}, ${friend.location.postcode} 
                ${friend.location.city}, ${friend.location.country}`}</li>
          <li key={uuid()}>{friend.email}</li>
          <li key={uuid()}>{friend.cell}</li>
        </ul>
      )}
    </div>
  );
}

export default FriendProfile;
