import cn from 'classnames';

import './index.scss';

const BaseButton = ({ disabled, className, children, type, onClick }) => (
  <button
    className={cn('button', className)}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default BaseButton;
