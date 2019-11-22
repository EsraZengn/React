import React from 'react';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Counter from './components/Counter';
import './App.css';

function App() {
  const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
  const shipping = {
    title: 'Free shipping',
    description:
      'As a Prime member enjoy fast, FREE delivery on over 100 million items. Also, gain early access to deals, Prime exclusive brands, video and music streaming.',
    image: '/images/f-delivery.png',
  };

  const payback = {
    title: '100% Money back',
    description:
      'A money-back guarantee, also known as a satisfaction guarantee, is essentially a simple guarantee that, if a buyer is not satisfied with a product or service, a refund will be made.',
    image: '/images/coin.png',
  };

  const support = {
    title: 'Online support 24/7',
    description:
      'Customer support is a range of customer services to assist customers in making cost effective and correct use of a product. It includes assistance in planning, installation, training, troubleshooting, maintenance, upgrading, and disposal of a product.',
    image: '/images/chat.png',
  };

  return (
    <div className="App">
      <div className='example-div'>
        <h1>Exercise 1: Extreme hobbies</h1>
        <HobbyList hobbies={hobbies}></HobbyList>
      </div>
      <div className='example-div'>
        <h1>Exercise 2: Perfect customer service!</h1>
        <div className="customer-service">
          <Guarantee feature={shipping}></Guarantee>
          <Guarantee feature={payback}></Guarantee>
          <Guarantee feature={support}></Guarantee>
        </div>
      </div>
      <div className='example-div'>
        <h1>Exercise 3: It's higher than 10!</h1>
        <Counter btnText={'Add 1'}></Counter>
      </div>
    </div>
  );
}

export default App;
