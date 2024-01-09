import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  list-style-type: none;
`;

export const ButtonSbm = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s, box-shadow 0.3s;
  background-color: #3498db;
  color: #fff;
  box-shadow: ${({ theme }) =>
    `${theme.shadows.button}, ${theme.shadows.inner}`};

  margin: 5px;

  &:hover {
    background-color: #2476c7;
    /* #3488db */
  }

  &:active {
    transform: translateY(1px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;
