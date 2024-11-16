import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SearchOrder from "../order/SearchOrder";
import Username from "../../feature/user/Username";
import DarkMode from "./DarkMode";
export default function Header() {
    return (
        <div className="navbar navbar-expand-lg bg-warning fixed-top">
            <div className="container">
                <div>
                <Link to="/" className="navbar-brand text-dark ">
                    Fast React Pizza Co.
                </Link>
                </div>
                <div>
                <SearchOrder/>

                </div>
              <div>
              <Username/>

              </div>
              <div>
                <DarkMode/>
              </div>
            </div>
        </div>
    );
  }
  