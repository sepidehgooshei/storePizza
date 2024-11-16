import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice"
import { formatCurrency } from "../utils/helpers"
export default function CartOverview(){
    const totalCartQuantity = useSelector(getTotalCartQuantity)
    const totalCartPrice = useSelector(getTotalCartPrice)
    return(
        <nav className="navbar fixed-bottom navbar-expand-lg navbar-light"  style={{backgroundColor:"#FFEBCC"}}>
        <div className="container-fluid text-uppercase">
         <span>{totalCartQuantity} pizzas</span>
         <span>{formatCurrency(totalCartPrice)} </span>
         <Link to="/cart" className="text-uppercase text-secondary text-decoration-none">open Cart &rarr;</Link>
        </div>
      </nav>
    )
}