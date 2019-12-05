import React from 'react';

function FriendProfile({ friend }) {
  const isObjectEmpty = obj => Object.getOwnPropertyNames(obj).length < 1;

  return (
    <div>
      {isObjectEmpty(friend) ? (
        ''
      ) : (
        <ul>
          <li>{`${friend.name.first} ${friend.name.last}`}</li>
          <li>{`${friend.location.street.name} ${friend.location.street.number}, ${friend.location.postcode} 
                ${friend.location.city}, ${friend.location.country}`}</li>
          <li>{friend.email}</li>
          <li>{friend.cell}</li>
        </ul>
      )}
    </div>
  );
}

export default FriendProfile;
