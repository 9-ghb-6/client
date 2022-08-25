import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function Header() {
  const handleMove = (evt) => {
    // evt.preventDefault();
  };
  return (
    <Navbar bg="primary" variand="primary">
      <nav className="navbar navbar-expand-sm ">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Navbar>
  );
}

export default Header;
