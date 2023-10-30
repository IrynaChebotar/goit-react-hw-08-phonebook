import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'selector/useAuth';
import { StyledHeader, LogoText, LogoWrap } from './Header.styled';
function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <LogoWrap>
        <LogoText>Phonebook</LogoText>
      </LogoWrap>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}
export default Header;
