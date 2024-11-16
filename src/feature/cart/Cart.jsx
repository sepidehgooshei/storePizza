import { Link } from "react-router-dom"
import {useDispatch, useSelector } from "react-redux"
import CartItem from "./CartItem"
import { clearCart, getCart } from "./cartSlice"
export default function Cart() {
   const username = useSelector((state)=>state.user.username)
   const cart = useSelector(getCart)
 const dispatch = useDispatch()
   return(
        <div className="container mx-5 px-4">
            <Link className="text-decoration-none" to="/menu"><span > &larr; Back to menu</span> </Link>
            <h2 className="mt-4 text-xl font-semibold">Your cart, {username}</h2>
            <ul className="mt-3 list-group list-unstyled">
            {cart.map((item)=>(
        <CartItem item={item} key={item.pizzaId}/>
    ))}
</ul>
<div className="mt-4">
    <Link to="/order/new">
    <button className="btn btn-warning me-5 rounded-pill">order pizza</button>
    </Link>
<button className="btn btn-outline-secondary rounded-pill" onClick={()=>dispatch(clearCart())}> Clear cart</button>
</div>
        </div>
    )
}