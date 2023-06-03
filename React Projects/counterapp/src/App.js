import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const decreaseCounter = () => {
    if (count > 0) {
      return setCount(count - 1);
    } else {
      alert("Number Can't be Negitive");
      return count;
    }
  };
  return (
    <>
      <div class="container">
        <h1>Counter Application</h1>

        <main>
          <h1>Counter Value is: {count}</h1>

          <button onClick={() => setCount(count + 1)}>Increase Counter</button>
          <button onClick={() => decreaseCounter()}>Decrease Counter</button>
          <button onClick={() => setCount(0)}>Reset Counter</button>
        </main>
      </div>
    </>
  );
};

export default App;
