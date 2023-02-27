import { useDispatch, useSelector } from 'react-redux';

import CartTicket from '@components/CartTicket';
import BasePopup from '@components/BasePopup';

import { addToCart, removeFromCart } from '@redux/actions/cart';

import Cart from '@assets/svg/Cart';

import './index.scss';

const PopupCart = () => {
  const dispatch = useDispatch();

  const { cartItems, totalAmount, totalPrice } = useSelector(
    state => state.cart
  );

  const togglerContent = (
    <div className="popup__toggler">
      <div className="popup__amount">{totalAmount}x</div>
      <Cart className="popup__cart-icon" />
    </div>
  );

  return (
    <BasePopup
      title="Cart"
      togglerContent={togglerContent}
      bottomContent={`Total price: $${totalPrice}`}
    >
      {!!totalAmount && (
        <div className="popup__tickets-container">
          {cartItems.map(ticket => (
            <CartTicket
              key={ticket.id}
              ticket={ticket}
              onAdd={() => dispatch(addToCart(ticket))}
              onRemove={() => dispatch(removeFromCart(ticket.id))}
              onRemoveAll={() => dispatch(removeFromCart(ticket.id, true))}
            />
          ))}
        </div>
      )}
      {!totalAmount && (
        <div className="popup__message">Add tickets to cart!</div>
      )}
    </BasePopup>
  );
};

export default PopupCart;
