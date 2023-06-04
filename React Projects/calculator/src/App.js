import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  const addInput = (value) => {
    // setInput((previousValue) => previousValue + value);
    if (value === 'back') {
      setInput((previousValue) => previousValue.slice(0, -1));
    } else {
      setInput((previousValue) => previousValue + value);
    }
  };

  const clearButton = () => {
    setInput('');
  };

  // const performCalculation = () => {
  //   console.log(input);
  //   const value = input.split(/[+\-*/]/);
  //   const operator = input.match(/[+\-*/]/)[0];
  //   console.log(value);
  //   console.log(operator);

  //   const num1 = parseFloat(value[0]);
  //   const num2 = parseFloat(value[1]);

  //   let result;
  //   switch (operator) {
  //     case '+':
  //       result = num1 + num2;
  //       break;
  //     case '-':
  //       result = num1 - num2;
  //       break;
  //     case '*':
  //       result = num1 * num2;
  //       break;
  //     case '/':
  //       result = num1 / num2;
  //       break;
  //     default:
  //       throw new Error('Invalid operator');
  //   }

  //   setInput(result.toString());
  // };

  const performCalculation = () => {
    try {
      const calculatedResult = eval(input);
      setInput(calculatedResult.toString());
    } catch (error) {
      setInput('Error');
    }
  };
  return (
    <>
      <div className="calculator">
        <h1>Calcultor App</h1>
        <div>
          <input type="text" placeholder="Enter Number" value={input} readOnly />
        </div>
        <div className="row">
          <button onClick={() => addInput('1')}>1</button>
          <button onClick={() => addInput('2')}>2</button>
          <button onClick={() => addInput('3')}>3</button>
          <button className="operator" onClick={() => addInput('+')}>
            +
          </button>
        </div>

        <div className="row">
          <button onClick={() => addInput('4')}>4</button>
          <button onClick={() => addInput('5')}>5</button>
          <button onClick={() => addInput('6')}>6</button>
          <button className="operator" onClick={() => addInput('-')}>
            -
          </button>
        </div>

        <div className="row">
          <button onClick={() => addInput('7')}>7</button>
          <button onClick={() => addInput('8')}>8</button>
          <button onClick={() => addInput('9')}>9</button>
          <button className="operator" onClick={() => addInput('*')}>
            *
          </button>
        </div>

        <div className="row">
          <button onClick={() => addInput('0')}>0</button>
          <button onClick={() => clearButton()}>Clear</button>
          <button className="operator" onClick={() => addInput('/')}>
            /
          </button>
        </div>

        <div className="row">
          <button onClick={() => addInput('back')}>Back</button>
          <button className="operator" onClick={() => performCalculation()}>
            ENTER
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
