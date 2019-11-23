import React from 'react';

function Button({ text, onClick }) {
  return <button className='counter-btn' onClick={onClick}>{text}</button>;
}

export default Button;
