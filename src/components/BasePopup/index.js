import { useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import cn from 'classnames';

import './index.scss';

const BasePopup = ({ children, togglerContent, bottomContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef(null);
  const popperRef = useRef(null);

  const { styles, attributes } = usePopper(
    containerRef.current,
    popperRef.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 20],
          },
        },
      ],
    }
  );

  const onToggle = () => setIsOpen(prev => !prev);

  return (
    <div ref={containerRef} className="popper-container">
      <div className="popper__toggler" onMouseEnter={onToggle}>
        {togglerContent}
      </div>
      <div
        ref={popperRef}
        className={cn('popper', {
          'popper--hidden': !isOpen,
        })}
        style={styles.popper}
        {...attributes.popper}
        onMouseLeave={onToggle}
      >
        <div className="popper__content">{children}</div>
        {bottomContent}
      </div>
    </div>
  );
};

export default BasePopup;
