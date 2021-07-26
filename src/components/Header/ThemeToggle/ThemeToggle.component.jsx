import React from 'react';
import {
  ToggleWrapper,
  ToggleInput,
  ToggleSlider,
  ToggleLabel,
} from './ThemeToggle.styles';

const ThemeToggle = ({ themeToggler, theme }) => {
  return (
    <>
      <ToggleWrapper>
        <ToggleInput type="checkbox" onChange={() => themeToggler()} />
        <ToggleSlider />
      </ToggleWrapper>
      <ToggleLabel>{theme === 'light' ? 'Light mode' : 'Dark mode'}</ToggleLabel>
    </>
  );
};

export default ThemeToggle;
