import styled from 'styled-components';

export const HeaderTwo = styled.p`
  color: #686880;
  margin-top: 120px;
  margin-bottom: 10px;
  font-size: 50px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    color: #5b5885;
  }
`;
