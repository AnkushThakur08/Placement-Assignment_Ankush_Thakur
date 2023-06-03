import React, { useState } from 'react';

const App = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllTodos([...allTodos, value]);
    setValue('');
    console.log(allTodos);
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos.splice(index, 1);
    setAllTodos(updatedTodos);
  };

  return (
    <>
      <div className="text-center text-lime-400">
        <h1>React TODO App </h1>
        <form onSubmit={handleSubmit}>
          <label>Enter TODO </label>
          <input type="text" placeholder="Enter Something...." onChange={handleChange} value={value} />
          <div>
            <button>Save TODO</button>
          </div>
        </form>

        <div>
          <h1>My Todos List</h1>
          <ul>
            {allTodos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => handleTodoDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
