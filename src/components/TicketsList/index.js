import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Ticket from '@components/Ticket';
import Spinner from '@components/Spinner';

import useInfiniteScroll from '@hooks/useInfiniteScroll';

import { setTickets } from '@redux/actions/tickets';
import { addToCart } from '@redux/actions/cart';

import './index.scss';

const TicketsList = () => {
  const lastTicketRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { state: queryParams } = useLocation();

  const { tickets } = useSelector(state => state.tickets);

  const { loadedItems, loading, hasMore } = useInfiniteScroll(
    '/week-matrix',
    lastTicketRef,
    queryParams
  );

  useEffect(
    () => dispatch(setTickets([...tickets, ...loadedItems])),
    [loadedItems]
  );

  useEffect(() => {
    if (!tickets.length) {
      navigate(-1);
    }
  }, []);

  const onAddToCart = ticket => {
    dispatch(addToCart(ticket));
    toast.info('Added to cart!');
  };

  return (
    <>
      <ul className="tickets-container">
        {tickets.map(ticket => (
          <Ticket
            key={ticket.id}
            className="tickets-list__ticket"
            ticket={ticket}
            onClick={() => onAddToCart(ticket)}
          />
        ))}
        {(loading || hasMore) && (
          <div className="ticket-list__spinner" ref={lastTicketRef}>
            <Spinner />
          </div>
        )}
      </ul>
    </>
  );
};

export default TicketsList;
