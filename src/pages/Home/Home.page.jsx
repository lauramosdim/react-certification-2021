import React from 'react';
// import Header from '../../components/Header/Header.component';
import HomeBody from '../../components/HomeBody';
import Header from '../../components/Header';

const HomePage = ({ themeToggler }) => {
  return (
    <>
      <Header themeToggler={themeToggler} />
      <HomeBody />
    </>
  );
};

export default HomePage;
