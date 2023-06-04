import React, { useReducer, useState } from 'react';

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action);
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [allTodos, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState('');
  return (
    <>
      <h1>TODO Application</h1>
      <h4>Todo List count: {allTodos.length}</h4>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        // onBlur={(e) =>
        //   dispatch({
        //     type: 'ADD_TODO',
        //     payload: e.target.value,
        //   })
        // }
      />

      <button
        onClick={(e) =>
          dispatch({
            type: 'ADD_TODO',
            payload: input,
          })
        }
      >
        ADD TODO
      </button>

      <div>
        <ul>
          {allTodos.map((todo, index) => (
            <li key={index}>
              {todo.name}

              <button
                onClick={() =>
                  dispatch({
                    type: 'REMOVE_TODO',
                    payload: todo.id,
                  })
                }
              >
                DELETE
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
