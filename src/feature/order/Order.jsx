import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";
import { calcMinutesLeft, formatCurrency, formatDate } from "../utils/helpers";
import OrderItem from "./OrderItem"
import { useEffect } from "react";
import UpdateOrder from "./UpdateOrder";
export default function Order() {
  const order = useLoaderData();
  const fetcher = useFetcher();  
useEffect(function() {
  if(!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
},[fetcher])
  if (!order) {
    return <p>Order not found. Please check the order ID.</p>;
  }
  const { id, status, priority, estimatedDelivery,cart,orderPrice,priorityPrice} = order;
const deliveryIn = calcMinutesLeft(estimatedDelivery)
return (
    <div className="container mx-5">
      <div className="row mx-5">
        <div className="col ">
          <div className="d-flex justify-content-between mx-5">
            <h2 className="fs-4">Order #{id} status</h2>
            <div className="mt-2 mx-5">
            {priority && (
            <span className="rounded-pill bg-danger px-4 py-1 text-white">
              Priority
            </span>
          )}
             <span className="rounded-pill bg-success mx-5 px-4 py-1 text-white">{status} order</span>
            </div>
          </div>
          <div className="p-3 d-flex justify-content-between p-2 mt-3" style={{backgroundColor:"#e9ecef"}}>
            <p className="mx-5 fw-normal" style={{ color: "#495057"}}>
              {deliveryIn >= 0 
                ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes lefts 😃`
                : 'Order should have arrived'
              }
            </p>
            <p className="fw-lighter text-secondary mx-5">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
          </div>
          <ul>
            {cart.map((item) => (
              <OrderItem
              className="border border-bottom border-dark pb-3 mb-3"
                item={item}
                key={item.pizzaId}
                isLoadingIngredients={fetcher.state === 'loading'}
                ingredients={fetcher?.data?.find((el) => el.id === item.pizzaId)?.ingredients ?? []}
              />

            ))}

          </ul>
          <div className="p-3 text-nowrap" style={{backgroundColor:"#e9ecef"}}>
            <p style={{color:"#343a40"}}>Price pizza :{" "}{formatCurrency(orderPrice)}</p>
         {priority && (
          <p className="text-muted">
            Price priority :{" "}{formatCurrency(priorityPrice)}
          </p>
         )}
         <p className="fw-bold" style={{ color: "#495057"}}>
          To pay on delivery :{" "}{formatCurrency(orderPrice + priorityPrice)}
         </p>
          </div>
          {!priority && <UpdateOrder/>}
        </div>
      </div>
    </div>  
  );
}
 


export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}


