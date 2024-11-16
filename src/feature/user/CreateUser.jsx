import { useState } from "react"
import {updateName} from "./userSlice"
import { useDispatch } from "react-redux"
import {useNavigate } from "react-router-dom"
export default function CreateUser() {
  const[username,setUsername] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if(!username) return
    dispatch(updateName(username))
    navigate('/menu')
  }
  return(
    <form onSubmit={handleSubmit}>
   <p className="mt-5 text-secondary">👋 Welcome! Please start by telling us your name:</p>
    <input
     type="text"
     value={username}
     onChange={(e)=>setUsername(e.target.value)}
     placeholder="Your full name"
     className="rounded-pill py-2 px-5 border-muted"
     />

      {
       username !== "" && (
      <div className="mt-4">
              <button type="submit" className="bg-warning">Start ordering</button>

      </div>

    
       )
      }
    </form>

  )

}




