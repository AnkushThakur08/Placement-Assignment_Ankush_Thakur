import React, { useContext } from 'react';

import ThemeContext from '../Context/ThemeContext';

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to iNeuron Dashboard</h1>
        <button
          style={{
            backgroundColor: '#26ae60',
            padding: '10px 150px',
            fontSize: '20px',
            color: '#FFF',
            cursor: 'pointer',
            border: 'none',
          }}
          onClick={() => {
            setThemeMode(themeMode === 'light' ? 'dark' : 'light');
          }}
        >
          {themeMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>

        <h1>{themeMode === 'light' ? 'TURN OFF THE LIGHTS' : 'TURN ON THE LIGHTS'}</h1>
      </div>
    </>
  );
};

export default ThemeToggler;
