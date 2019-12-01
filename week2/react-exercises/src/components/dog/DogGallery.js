import React, { useState } from 'react';
import Button from './Button';
import DogPhoto from './DogPhoto';
import uuid from 'uuid';

function DogGallery() {
  const [dogPhotos, setDogPhotos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const getDogPhoto = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Couldn't fetch dog image`);
        }
        return response.json();
      })
      .then(image => {
        setDogPhotos([...dogPhotos, image.message]);
      })
      .catch(err => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div className={'exercise-div'}>
      <Button onClick={getDogPhoto} />
      <div className='dog-div'>
        {errorMessage && <p>{errorMessage}</p>}
        {!errorMessage && dogPhotos.length === 0 ? (
          <div className='dog-div'>Get your first dog by clicking the button!</div>
        ) : (
          dogPhotos.map(photo => <DogPhoto imageSrc={photo} key={uuid()} />)
        )}
      </div>
    </div>
  );
}

export default DogGallery;
