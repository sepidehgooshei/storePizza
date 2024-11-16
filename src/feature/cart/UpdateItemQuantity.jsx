import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId,currentQuantity }) {
  const dispatch = useDispatch()
  
    return (
        <div>
            <button 
            onClick={()=>dispatch(decreaseItemQuantity(pizzaId))}
                className="bg-warning rounded-circle ms-1" 
                style={{ width: '30px', height: '30px', padding: '0', lineHeight: '30px' }}
            >
                -
            </button>
            <span className="mx-1">{currentQuantity}</span>
            <button
            onClick={()=>dispatch(increaseItemQuantity(pizzaId))} 
                className="bg-warning rounded-circle ms-1" 
                style={{ width: '30px', height: '30px', padding: '0', lineHeight: '30px' }}
            >
                +
            </button>
        </div>
    );
}




