import React from 'react';
// import Header from '../../components/Header/Header.component';
import HomeBody from '../../components/HomeBody';
import Header from '../../components/Header';

const HomePage = ({ themeToggler, theme }) => {
  return (
    <>
      <Header themeToggler={themeToggler} theme={theme} />
      <HomeBody />
    </>
  );
};

export default HomePage;
