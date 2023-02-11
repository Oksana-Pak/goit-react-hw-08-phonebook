import styled from 'styled-components';
import { Button } from '../LoginForm/LoginForm.styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  color: #ffffff;
  opacity: 0.8;
`;

export const ButtonStyled = styled(Button)`
  width: 100px;
  margin: 0;
  padding: 5px;
`;
