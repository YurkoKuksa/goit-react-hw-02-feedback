import { ButtonSbm, List } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(item => (
        <li key={item}>
          <ButtonSbm type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </ButtonSbm>
        </li>
      ))}
    </List>
  );
};
