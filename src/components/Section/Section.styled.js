import styled from 'styled-components';

export const HeaderTwo = styled.h2`
  color: #686880;
  margin-bottom: 10px;
  font-size: 70px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    color: #5b5885;
  }
`;
