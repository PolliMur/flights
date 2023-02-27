import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TicketsList from '@components/TicketsList';
import SortMenu from '@components/SortMenu';
import BaseButton from '@components/BaseButton';

import { setTickets } from '@redux/actions/tickets';

import './index.scss';

const sortOptions = [
  { value: 'price', label: 'Price' },
  { value: 'gate', label: 'Gate' },
  { value: 'depart_date', label: 'Depart date' },
];

const Tickets = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onNavigateBack = () => {
    navigate(-1);
    dispatch(setTickets([]));
  };

  return (
    <div className="tickets-page">
      <BaseButton
        type="button"
        className="tickets-page__button"
        onClick={onNavigateBack}
      >
        Back to search
      </BaseButton>
      <SortMenu options={sortOptions} />
      <div className="tickets-page__title">Found tickets: </div>
      <TicketsList />
    </div>
  );
};

export default Tickets;
