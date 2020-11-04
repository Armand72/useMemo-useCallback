import React, { useState,useCallback,useMemo } from 'react';

import ChildIssue from './ChildIssue';


const slowFunction = (number) =>  {
  // simulation of a slow function with a loop and measuring the performance
    const start = performance.now();
    for(let i =0; i < 1000000000; i++) {}
    const end = performance.now();
    const diff = (end - start) / 1000
    console.log(`incrementor parent/ slow function =>  ${diff.toFixed(2)}s`);
    return number * number * number
}

const Issue = () => {
  let [number, setNumber] = useState(0);
  let [numberChild, setNumberChild] = useState(0);
  let [move, setMove] = useState(false);

  // increment logic

  const increase = () => {
    setNumber(number += 1);
  };
  const decrease = () => {
    setNumber(number -= 1);
  };
  const increaseChildNumber = () => {
    setNumberChild(numberChild += 1);
  };
  const decreaseChildNumber = () => {
    setNumberChild(numberChild -= 1);
  };

  // get a value from a slow function
  const multiplicationParent = slowFunction(number);

  // function sent to the child component
  const multiplicationChild = () => {
    console.log(`incrementor child`);
    return numberChild*numberChild
  }


  return (
    <> 
      <div className="container">
        <div className="info">
          <h1 className="info__title">Issue</h1>
          <p className="info__text">Clicking on the buttons will change the state of the component therefore the component 'Issue' will be re-rendered but also the child component.
            After each render a slow function is being called causing performance issues as we can see on the console.
          </p>
        </div>
        <div className="incrementor">
          <h2 className="incrementor__title">Parent component incrementor</h2>
          <button className="incrementor__button" type="button" onClick={() => increase()}>+</button>
          <button className="incrementor__button" type="button" onClick={() => decrease()}>-</button>
          <div className="incrementor__number">{multiplicationParent}</div>
        </div>
        <div className="incrementor">
          <h2 className="incrementor__title">Child component incrementor</h2>
          <button className="incrementor__button" type="button" onClick={() => increaseChildNumber()}>+</button>
          <button className="incrementor__button" type="button" onClick={() => decreaseChildNumber()}>-</button>
        </div>
        <div className="animation">
          <h2 className="incrementor__title">Move the square</h2>
          <div className={move ? "animation__square leave" : "animation__square" } onAnimationEnd={() => setMove(move => !move)}  />
          <button className="animation__button" type="button" onClick={() => setMove(move => !move)}>Move</button>
        </div>
      </div>
      <div className="incrementor">
          <h2 className="incrementor__title">Child Component</h2>
          <ChildIssue multiplicationChild={multiplicationChild}/>
      </div>
    </>
  );
};

export default Issue;
