import { Link } from "react-router-dom"
export default function EmptyCart(){
return(
    <div>
        <Link to="/menu" className="text-decoration-none">
        <button className="btn text-primary">&larr; Back to menu</button>
        <p className="mt-3 text-secondary"> Your cart is still empty. Start adding some pizzas :)
        </p>
        </Link>
    </div>
)
}