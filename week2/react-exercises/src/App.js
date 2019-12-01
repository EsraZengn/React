import React from 'react';
import './App.css';
import Friend from './components/friend/Friend';
import DogGallery from './components/dog/DogGallery';
import RandomJoke from './components/joke/RandomJoke';

function App() {
  return (
    <div className="App">
      <Friend />
      <DogGallery />
      <RandomJoke />
    </div>
  );
}

export default App;
