import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../themes';

import Home from '../../pages/Home';

const App = () => {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'));

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Home themeToggler={themeToggler} theme={theme} />
      </ThemeProvider>
    </>
  );
};

export default App;
