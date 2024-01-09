import styled from 'styled-components';

export const Ul = styled.ul`
  padding: 10px 30px;
`;

export const List = styled.li``;

export const Evaluation = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};
  color: #094682;
`;

export const Span = styled.span`
  font-size: 40px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};
`;

export const Total = styled.p`
  font-size: 40px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};
  color: #262f38;
  margin: 10px 0;
`;

export const SpanPositive = styled.span`
  font-size: 40px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.small};
  color: ${({ value }) =>
    value <= 30 ? '#FF6961' : value <= 60 ? '#0ea5e6' : 'green'};
`;
