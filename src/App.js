import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [clickButton, setClickButton] = useState(false);
  const [startButton, setStart] = useState(true);
  const [clicked, setClicked] = useState(false);

  function showButtonClick(){
    setClickButton(true);
    setStart(false);
    setCount(0);
    setClicked(false);
    timer();
  }

  function handleClick(){
    setCount(count + 1);
  }

  function timer(){
    setTimeout(removeButton, 10000);
  }

  function removeButton(){
    setClickButton(false);
    setStart(true);
    setClicked(true);
  }


  return (
    <div className="App">
      {startButton && <button onClick={showButtonClick}>Start</button>}
      {clickButton && <button onClick={handleClick} className="ClickHere">Click Here</button>}
      {clickButton && <p>You Clicked {count} Times</p>}
      {clicked && <p>Your Cps: {(count / 10).toFixed(1)}</p>}
    </div>
  );
}

export default App;
