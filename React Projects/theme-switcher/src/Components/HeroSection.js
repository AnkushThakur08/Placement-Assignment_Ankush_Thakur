import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Color';

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: 'center',
      }}
    >
      <h1>Context API theme toggler</h1>
      <h4 style={{ fontWeight: 'bold ' }}> {theme === 'light' ? 'This is a LIGHT paragraph' : 'This is a DARK paragraph'} </h4>
    </div>
  );
};

export default HeroSection;
