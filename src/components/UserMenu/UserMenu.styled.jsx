import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Wrap = styled.div`
  display: flex;
  gap: 10px;
`;
export const ContactsLink = styled(Link)`
  min-width: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  transition: font-size 0.3s, text-decoration 0.3s;
  &:focus,
  &:hover {
    color: rgb(8, 38, 13);
    font-size: 18px;
    text-decoration: underline;
  }
`;
export const LogOutButton = styled.button`
  min-width: 70px;
  padding: 8px;
  border-radius: 6px;
  text-decoration: none;
  font-style: inherit;
  color: inherit;
  transition: font-size 0.3s, text-decoration 0.3s;
  border: none;
  background-color: transparent;
  &:focus,
  &:hover {
    color: rgb(8, 38, 13);
    font-size: 18px;
    text-decoration: underline;
  }
  font-size: 20px;
  font-weight: 700;
`;

export const UserName = styled.span`
  color: #13aaf6;
  font-style: italic;
  font-size: 22px;
  text-transform: uppercase;
`;
