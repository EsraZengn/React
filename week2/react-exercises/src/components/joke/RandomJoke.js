import React, { useState, useEffect } from 'react';
import Joke from './Joke';

function RandomJoke() {
  const [joke, setJoke] = useState({});
  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Couldn't fetch joke`);
        }
        return response.json();
      })
      .then(joke => {
        setJoke(joke);
      });
  }, []);

  return (
    <div className={'exercise-div'}>
      <img
      className={'joke-img'}
        src="https://thumbs.gfycat.com/AlertSpitefulGalapagospenguin-max-1mb.gif"
        alt="Not found"
      ></img>
      <Joke joke={joke}></Joke>
    </div>
  );
}

export default RandomJoke;
