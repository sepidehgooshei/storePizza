import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./feature/ui/AppLayout"
import Home from "./feature/ui/Home";
import  Menu , {loader as menuLoader} from "./feature/menu/Menu";
import Cart from "./feature/cart/Cart";
import CreateOrder, { action as createOrderAction } from "./feature/order/createOrder";
import Order, { loader as orderLoader } from "./feature/order/Order";
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/', element:<Home/>
      },
      {
        path:"/menu",
        element:<Menu/>,
      loader:menuLoader
      },{
        path:"/cart",
        element:<Cart/>
      },{
        path:"/order/new",
        element:<CreateOrder/>,
        action: createOrderAction, // Added `action` here
      },{
        path:"/order/:orderId",
        element:<Order/>,
        loader: orderLoader,

      }
    ]
    
  }
])



export default function App() {
  return <RouterProvider router={router}/>
}