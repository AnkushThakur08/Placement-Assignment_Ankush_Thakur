import React, { useState } from 'react';
import ThemeContext from './Context/ThemeContext';
import HeroSection from './Components/HeroSection';
import ThemeToggler from './Components/ThemeToggler';

const App = () => {
  const themeHook = useState('light');
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <ThemeToggler />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
