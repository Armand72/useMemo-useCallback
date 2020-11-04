import React, { useState,useCallback,useMemo } from 'react';

import ChildSolution from './ChildSolution';

function returnValue(number) {
    console.log('incrementor parent return a value');
    return number * number
}

const Solution = () => {
  let [number, setNumber] = useState(0);
  let [numberChild, setNumberChild] = useState(0);
  let [move, setMove] = useState(false);


//  increment logic

  const increase = () => {
    setNumber(number += 1);
  };
  const decrease = () => {
    setNumber(number -= 1);
  };
  const increaseChild = () => {
    setNumberChild(numberChild += 1);
  };
  const decreaseChild = () => {
    setNumberChild(numberChild -= 1);
  };


//  the multiplicationParent constant is a value, we use useMemo

const multiplicationParent = useMemo(() => {
    return returnValue(number);
  }, [number]);

//  the multiplicationChild constant is a function, we use useCallback

const multiplicationChild = useCallback(() => {
    console.log('incrementor child return a function');
   return numberChild * numberChild;
}, [numberChild]);

  return (
    <>
      <div className="container">
        <div className="info">
          <h1 className="info__title">Solution</h1>
          <p className="info__text">To solve that issue we use useMemo and useCallback. They both use dependancies checking the referential equality of a value between renders.
          The function will only be be triggered when the value has changed avoiding calling unnecessary functions or useless re-rendering of child components.
          useMemo will return a value and useCallback returns a function.
            </p>
        </div>
        <div className="incrementor">
          <h2 className="incrementor__title">Parent component incrementor</h2>
          <button className="incrementor__button" type="button" onClick={() => increase()}>+</button>
          <button className="incrementor__button" type="button" onClick={() => decrease()}>-</button>
          <div className="incrementor__number">value : {multiplicationParent}</div>
        </div>
        <div className="incrementor">
          <h2 className="incrementor__title">Child component incrementor</h2>
          <button className="incrementor__button" type="button" onClick={() => increaseChild()}>+</button>
          <button className="incrementor__button" type="button" onClick={() => decreaseChild()}>-</button>
        </div>
        <div className="animation">
        <h2 className="incrementor__title">Move the square</h2>
          <div className={move ? "animation__square leave" : "animation__square" } onAnimationEnd={() => setMove(move => !move)}  />
          <button className="animation__button" type="button" onClick={() => setMove(move => !move)}>Move</button>
        </div>
      </div>
      <div className="incrementor">
          <h2 className="incrementor__title">Child Component</h2>
          <ChildSolution multiplicationChild={multiplicationChild}/>
      </div>
    </>

  );
};

export default Solution;
