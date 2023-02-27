import { memo } from 'react';
import { DateTime } from 'luxon';
import cn from 'classnames';

import Dollar from '@assets/svg/Dollar';
import Plane from '@assets/svg/Plane';
import Location from '@assets/svg/Location';
import Home from '@assets/svg/Home';

import './index.scss';

const Ticket = ({ ticket, className, lastRef, onClick }) => (
    <div
        ref={lastRef}
        className={cn('ticket', className)}
        onClick={onClick}
        date-test-id="ticket"
    >
        <div className="ticket__price-container ticket__item">
            <Dollar className="ticket__price-icon" />
            <div className="ticket__price">{ticket.price}</div>
        </div>
        <div className="ticket__origin-container ticket__item">
            <Home className="ticket__icon" />
            <div className="ticket__origin">{ticket.origin}</div>
        </div>
        <div className="ticket__destination-container ticket__item">
            <Location className="ticket__icon" />
            <div className="ticket__destination">{ticket.destination}</div>
        </div>
        <div className="ticket__depart-date ticket__item">
            {DateTime.fromISO(ticket.departDate).toFormat('LLLL dd')}
        </div>
        <div className="ticket__gate-container ticket__item">
            <div className="ticket__gate">
                {ticket.gate ? ticket.gate : 'No gate'}
            </div>
            <Plane className="ticket__icon" />
        </div>
    </div>
);

export default memo(Ticket);
