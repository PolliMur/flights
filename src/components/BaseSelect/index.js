import cn from 'classnames';

import './index.scss';

const BaseSelect = ({ options, value, className, onChange }) => (
    <select
        role="combobox"
        value={value}
        className={cn('select', className)}
        onChange={onChange}
    >
        {options.map((option) => (
            <option
                key={option.label}
                className="select__option"
                value={option.value}
            >
                {option.label}
            </option>
        ))}
    </select>
);

export default BaseSelect;
