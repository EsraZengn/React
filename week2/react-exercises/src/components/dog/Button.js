import React from 'react';

function Button({ onClick }) {
  return <input className='btn' type="button" value="Get a Dog!" onClick={() => onClick()} />;
}

export default Button;
