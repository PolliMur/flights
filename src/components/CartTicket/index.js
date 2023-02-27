import Ticket from '@components/Ticket';

import Plus from '@assets/svg/Plus';
import Minus from '@assets/svg/Minus';
import Trash from '@assets/svg/Trash';

import './index.scss';

const CartTicket = ({ ticket, onAdd, onRemove, onRemoveAll }) => (
  <div key={ticket.id} className="cart-ticket-wrapper">
    <Ticket className="cart-ticket" ticket={ticket} />
    <div className="cart-ticket__operations-container">
      <div className="cart-ticket__amount">{ticket.amount}X</div>
      <div className="cart-ticket__icons-container">
        <Plus className="cart-ticket__icon" onClick={onAdd} />
        <Minus className="cart-ticket__icon" onClick={onRemove} />
        <Trash className="cart-ticket__icon" onClick={onRemoveAll} />
      </div>
    </div>
  </div>
);

export default CartTicket;
