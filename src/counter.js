import React from 'react';

export default function Counter() {
  const [counter, setCounter] = React.useState(1);

  function increaseCounter() {
    let count = counter + 1;
    setCounter(count);
  }

  function decreaseCounter() {
    let count = counter - 1;
    setCounter(count);
  }

  return (
    <div className='container'>
      <span onClick={decreaseCounter} className="box">
        -
      </span>
      <span className="box1">{counter}</span>
      <span onClick={increaseCounter} className="box2">
        +
      </span>
    </div>
  );
}
