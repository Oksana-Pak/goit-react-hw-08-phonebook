import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const Button = styled.button`
  margin-left: 15px;
  height: 50%;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e4ede6;
  }
`;
