
import { useSelector } from 'react-redux';
import { formatCurrency } from '../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  return (
    <li className="py-3 d-flex flex-column flex-sm-row align-items-sm-center justify-content-between border-bottom">
      <p className="mb-1 mb-sm-0">
        {quantity}&times; {name}
      </p>
      <div className="d-flex align-items-center justify-content-between gap-2 gap-sm-3">
        <p className="text-muted fw-bold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

