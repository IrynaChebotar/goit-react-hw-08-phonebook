import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 15px;
`;

export const Item = styled.li`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: 600;
`;

export const ContactName = styled.p`
  margin: 0px;
  color: rgb(8, 38, 13);
`;

export const DeleteButton = styled.button`
  padding: 4px;
  width: 30px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 15px;
  background: #a656dc;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a656dc;
    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
  }
  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 50px;
  }
`;
