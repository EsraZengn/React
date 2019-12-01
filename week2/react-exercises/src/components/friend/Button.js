import React from 'react';

function Button({ getFriend }) {
  return (
    <input className='btn' type="button" value="Get a friend!" onClick={() => getFriend()} />
  );
}

export default Button;
