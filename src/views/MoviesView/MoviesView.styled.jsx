import styled from '@emotion/styled';

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormInput = styled.input`
  height: 30px;
  font-size: 24px;
  padding-left: 5px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    border: 1px solid #f32179;
  }
`;

export const Button = styled.button`
  height: 32px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: #f32179;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 10px;
  :hover,
  :focus {
    background-color: #f321c6;
  }
`;

export const ListItem = styled.li`
  padding: 5px 0px;
`;
