import cn from 'classnames';

import './index.scss';

const BaseInput = ({
    id,
    name,
    type,
    value,
    className,
    placeholder,
    Icon,
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
        { 'input__icon-padding': Icon }
    );

    return (
        <div className="input-wrapper">
            <div className={classes}>
                {Icon && <Icon className="input__icon" />}
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    className="input"
                    placeholder={placeholder}
                    onChange={onChange}
                    autoComplete="off"
                    onBlur={onBlur}
                />
            </div>
            {isTouched && error && (
                <div
                    className="input__error-message"
                    role="alert"
                    data-test-id="input-error"
                >
                    {error}
                </div>
            )}
        </div>
    );
};

export default BaseInput;
