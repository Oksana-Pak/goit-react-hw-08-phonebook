import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  width: 30%;
  padding: 20px;
  border: 1px solid black;
`;

export const FormikLabel = styled.label`
  display: flex;
  flex-direction: column;
`;
export const FormikInput = styled(Field)`
  width: 40%;
  margin: 5px 0 15px;
`;
export const FormikError = styled(ErrorMessage)`
  font-weight: 700;
  color: red;
`;

export const FormikButton = styled.button`
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
