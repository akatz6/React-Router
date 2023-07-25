import { Link } from "react-router-dom";
import './style.css'

function Header() {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/two">Page Two</Link>
        </li>
        <li className="nav-item">
          <Link to="/three">Page Three</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
