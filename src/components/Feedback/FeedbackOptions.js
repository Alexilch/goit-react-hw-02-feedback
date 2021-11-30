import PropTypes from 'prop-types';
import s from './Feedback.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.buttonswrap}>
      {options.map(option => (
        <button
          type="button"
          className={s.button}
          key={option}
          status={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
