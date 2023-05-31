import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div class="container">
        <h1>Counter Application</h1>

        <main>
          <h1>Counter Value is: {count}</h1>

          <button onClick={() => setCount(count + 1)}>Increase Counter</button>
          <button onClick={() => setCount(count > 0 ? count - 1 : count)}>Decrease Counter</button>
          <button onClick={() => setCount(0)}>Reset Counter</button>
        </main>
      </div>
    </>
  );
};

export default App;
