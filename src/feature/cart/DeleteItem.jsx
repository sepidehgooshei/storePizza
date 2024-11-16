import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export default function DeleteItem({pizzaId}) {
    const dispatch = useDispatch()
    return(
        <button type="button" className="text-uppercase badge rounded-pill bg-warning text-dark px-4 py-2" onClick={()=>dispatch(deleteItem(pizzaId))}>Delete</button>
    )
}