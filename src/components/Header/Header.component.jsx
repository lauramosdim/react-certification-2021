import React from 'react';
import {
  HeaderWrapper,
  HeaderContent,
  HeaderMenu,
  HeaderSearchInput,
  HeaderLoginIcon,
  HeaderSection1,
  HeaderSection2,
} from './Header.styles';
import MenuSVG from '../../assets/images/MenuSVG';
import ThemeToggle from './ThemeToggle/ThemeToggle.component';

const Header = ({ themeToggler, theme }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderSection1>
          <HeaderMenu>
            <MenuSVG />
          </HeaderMenu>
          <HeaderSearchInput placeholder="Search..." defaultValue="wizeline" />
        </HeaderSection1>
        <HeaderSection2>
          <ThemeToggle themeToggler={themeToggler} theme={theme} />
          <HeaderLoginIcon />
        </HeaderSection2>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
