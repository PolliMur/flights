import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';

import BaseSelect from '@components/BaseSelect';

import { setTickets } from '@redux/actions/tickets';

import './index.scss';

const sortByTerm = (arr, term) => {
  return [...arr].sort((a, b) => {
    if (term === 'gate') return a[term].localeCompare(b[term]);
    if (term === 'price') return a[term] - b[term];

    return DateTime.fromISO(a[term]).ts - DateTime.fromISO(b[term]).ts;
  });
};

const SortMenu = ({ options }) => {
  const [sortTerm, setSortTerm] = useState('price');

  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets);

  useEffect(
    () => dispatch(setTickets(sortByTerm(tickets, sortTerm))),
    [sortTerm]
  );

  return (
    <div className="sort-menu">
      <div className="sort-menu__title">Sort by: </div>
      <BaseSelect
        className="sort-menu__select"
        options={options}
        onChange={e => setSortTerm(e.target.value)}
      />
    </div>
  );
};

export default SortMenu;
