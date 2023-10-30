import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  min-width: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  transition: font-size 0.3s, text-decoration 0.3s;
  &:focus,
  &:hover {
    color: rgb(33, 8, 38);
    font-size: 18px;
    text-decoration: underline;
  }
`;
