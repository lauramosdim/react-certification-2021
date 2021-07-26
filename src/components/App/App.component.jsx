import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../themes';

import Home from '../../pages/Home';

const App = () => {
  const [theme, setTheme] = useState('dark');

  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Home themeToggler={themeToggler} />
      </ThemeProvider>
    </>
  );
};

export default App;
