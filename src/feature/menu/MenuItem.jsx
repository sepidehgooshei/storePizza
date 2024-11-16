
import { useDispatch, useSelector } from 'react-redux';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { formatCurrency } from '../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="d-flex gap-3 py-2 px-5">
      <img
        src={imageUrl}
        alt={name}
        className={`img-fluid rounded ${soldOut ? 'opacity-50' : ''}`}
        style={{ height: '100px', width: '100px', objectFit: 'cover' }}
      />
      <div className="d-flex flex-column flex-grow-1 pt-1">
        <p className="fw-bold">{name}</p>
        <p className="text-secondary fst-italic text-capitalize">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto d-flex align-items-center justify-content-between">
          {!soldOut ? (
            <p className="text-secondary">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-danger text-uppercase fw-bold">Sold out</p>
          )}

          {isInCart ? (
            <div className="d-flex align-items-end gap-2 gap-md-4">
              <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
              <DeleteItem pizzaId={id} />
            </div>
          ) : (
            !soldOut && (
              <button type="button" className=" btn btn-warning rounded-pill py-2 px-4 text-uppercase" onClick={handleAddToCart}>
                Add to cart
              </button>
            )
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;






