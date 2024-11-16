

import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { fetchAddress } from "../user/userSlice";
import { useState } from "react";
import { formatCurrency } from "../utils/helpers";
import { getCart, getTotalCartPrice, clearCart } from "../cart/cartSlice";
import { redirect } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import store from '../../store';
import EmptyCart from "../cart/EmptyCart";
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const { username, status: addressStatus, position, address, error: errorAddress } = useSelector(
    (state) => state.user
  );
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const dispatch = useDispatch();

  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

 if (!cart.length) return <EmptyCart />;

  return (
    <div className="container mt-5 mx-5 px-5 ">
      <h2 className="mb-4 text-secondary">Ready to order? Let's go!</h2>

      <Form method="POST" className="fw-normal text-muted">
        <div className="mb-1 row">
          <label className="col-sm-2 col-form-label text-nowrap ">First Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="customer"
              defaultValue={username}
              required
              className="form-control mx-5  rounded-pill shadow-sm mb-5 bg-body rounded"
            />
          </div>
        </div>

        <div className="mb-1 row ">
          <label className="col-sm-2 col-form-label text-nowrap text-center">Phone number</label>
          <div className="col-sm-10 ">
            <input type="tel" name="phone" required className="form-control mx-5 rounded-pill shadow-sm mb-5 bg-body rounded" />
            {formErrors?.phone && (
              <div className="mt-2 alert alert-danger p-1 text-center">
                {formErrors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">Address</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
              className="form-control mx-5 rounded-pill shadow-sm mb-5 bg-body rounded"
            />
            {addressStatus === 'error' && (
              <div className="mt-2 alert alert-danger p-1 text-center">
                {errorAddress}
              </div>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <div className="col-sm-2 mt-2">
              <button
                disabled={isLoadingAddress}
                type="button"
                className="btn btn-warning text-nowrap rounded-pill text-uppercase"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </button>
            </div>
          )}
        </div>

        <div className="form-check mb-3">
          <input
            className="form-check-input shadow-sm"
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="form-check-label fst-normal" htmlFor="priority">
            Want to give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <input
          type="hidden"
          name="position"
          value={
            position.longitude && position.latitude
              ? `${position.latitude},${position.longitude}`
              : ''
          }
        />

        <button disabled={isSubmitting || isLoadingAddress} type="primary" className="btn btn-warning rounded-pill text-uppercase">
          {isSubmitting
            ? 'Placing order...'
            : `Order now for ${formatCurrency(totalPrice)}`}
        </button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'Please provide a correct phone number for contact.';

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
