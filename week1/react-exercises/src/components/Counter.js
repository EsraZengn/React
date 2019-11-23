import React, { useState } from 'react';
import Count from './Count';
import Button from './Button';

function Counter(props) {
  let [count, setCount] = useState(0);
  let feedback = '';

  return (
    <div>
      {count > 10 ? (
        <p className="feedback-warning">{(feedback = `It's higher than 10!`)}</p>
      ) : (
        <p className="feedback">{(feedback = `Keep counting...`)}</p>
      )}
      <Count count={count} feedback={feedback}></Count>
      <Button text={props.btnText} onClick={() => setCount(count + 1)}></Button>
    </div>
  );
}
export default Counter;
