import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter(props) {
  let [count, setCount] = useState(0);
  let feedback = '';

  return (
    <div>
      {count > 10 ? (feedback = `It's higher than 10!`) : (feedback = `Keep counting...`)}
      <Count count={count} feedback={feedback}></Count>
      <Button text={props.btnText} onClick={() => setCount(count + 1)}></Button>
    </div>
  );
}
export default Counter;
