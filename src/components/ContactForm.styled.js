import styled from 'styled-components';

export const Form = styled.form`
  width: 30%;
  padding: 20px;
  border: 1px solid black;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  input {
    width: 40%;
    margin: 5px 0 15px;
  }
`;
export const Button = styled.button`
  margin-top: 5px;
  padding: 2px 10px;
  background-color: transparent;
  border: 1px solid grey;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #e4ede6;
  }
`;
