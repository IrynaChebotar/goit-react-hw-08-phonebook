import React from 'react';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useAuth } from 'selector/useAuth';
import { StyledHeader, Description, Wrap } from './Header.styled';
function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <Wrap>
        <Description>Phonebook</Description>
      </Wrap>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}
export default Header;
