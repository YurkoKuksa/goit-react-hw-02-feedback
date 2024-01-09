import {
  Evaluation,
  List,
  Span,
  SpanPositive,
  Total,
  Ul,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Ul>
      <List>
        <Evaluation>
          Good: <Span>{good}</Span>
        </Evaluation>
      </List>
      <List>
        <Evaluation>
          Neutral: <Span>{neutral}</Span>
        </Evaluation>
      </List>
      <List>
        <Evaluation>
          Bad: <Span>{bad}</Span>
        </Evaluation>
      </List>

      <List>
        <Total>
          Total: <Span>{total}</Span>
        </Total>
      </List>
      <List>
        <Total>
          Positive Feedback:
          <SpanPositive value={positivePercentage}>
            &nbsp;
            {positivePercentage}%
          </SpanPositive>
        </Total>
      </List>
    </Ul>
  );
};
