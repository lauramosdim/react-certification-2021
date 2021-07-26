import React from 'react';
import {
  ToggleWrapper,
  ToggleInput,
  ToggleSlider,
  ToggleLabel,
} from './ThemeToggle.styles';

const ThemeToggle = ({ themeToggler }) => {
  return (
    <>
      <ToggleWrapper>
        <ToggleInput type="checkbox" onChange={() => themeToggler()} />
        <ToggleSlider />
      </ToggleWrapper>
      <ToggleLabel>Dark mode</ToggleLabel>
    </>
  );
};

export default ThemeToggle;
