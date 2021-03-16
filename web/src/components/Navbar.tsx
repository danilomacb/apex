import { Link } from "react-router-dom";

import "../styles/navbar.scss";
import Login from "./Login";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      <ul>
        <Login />
      </ul>
    </nav>
  );
}

export default Navbar;
