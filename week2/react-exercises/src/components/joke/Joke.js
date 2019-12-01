import React from 'react';

function Joke({ joke }) {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
}

export default Joke;
