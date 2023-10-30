import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 15px;
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 15px;
  outline: none;
  border: 1px solid green;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  &:focus {
    border-color: #dd00ff;
  }
`;
export const FormBtn = styled.button`
  margin-top: 60px;
  padding: 4px;
  width: 30%;
  height: 100%;
  border-radius: 15px;
  background: #a656dc;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a656dc;
    box-shadow: 1px 2px 6px 0px rgba(65, 33, 83, 0.7);
  }
  box-shadow: 0 2px 4px rgba(65, 33, 83, 0.7);
`;
export const StyledError = styled.p`
  color: red;
  font-size: 12px;
  border-radius: 25px;
  padding: 2px 4px;
  background-color: #fff;
`;
