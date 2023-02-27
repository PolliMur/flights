import DatePicker from 'react-datepicker';
import cn from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import './index.scss';

const DateInput = ({
  id,
  name,
  className,
  placeholder,
  Icon,
  value,
  onChange,
  onBlur,
  error,
  isTouched,
}) => {
  const classes = cn(
    'input-container',
    className,
    {
      'input--error': error && isTouched,
    },
    { 'date-input__icon-padding': Icon }
  );

  return (
    <div className="date-input-wrapper">
      <div className={classes}>
        {Icon && <Icon className="date-input__icon" />}
        <DatePicker
          id={id}
          name={name}
          portalId="root-portal"
          className="date-input"
          placeholderText={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          popperPlacement="bottom"
          autoComplete="off"
        />
      </div>
      {error && isTouched && <div className="date-input__error">{error}</div>}
    </div>
  );
};

export default DateInput;
