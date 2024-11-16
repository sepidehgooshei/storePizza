import {useState} from "react"
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const[query,setQuery] = useState("")
 const navigate = useNavigate()
  function handleSubmit(e) {
 e.preventDefault()
if(!query){
    alert("Please enter an order number to search.");
return}
navigate(`/order/${query}`)
setQuery("")
}
    return(
        <form onSubmit={handleSubmit} className="d-flex">
            <label htmlFor="orderSearch" className="visually-hidden">Search Order</label>
            <input 
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            id="orderSearch" 
            className="text-center form-control rounded-pill"
            placeholder="Search order #"
            style={{ backgroundColor: "#fff9e6" }}
type="search"
            />
            </form>
    )
}