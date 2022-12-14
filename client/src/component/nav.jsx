import { Link } from "react-router-dom"
import Signup from "./signup";



function Nav(props) {
  const  { logon , setLogon, signup } = props;
  
  const logoutHandle = () =>{
    localStorage.removeItem("token");
    setLogon(null);
    signup(null);
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          πππππππππππ ππππππ
        </Link>
        {logon && <span className="navbar-text">{logon}</span>}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {!logon && (
                <Link to="/login" className="nav-link ">
                  ππΌπ΄πΆπ»
                </Link>
              )}
            </li>
          </ul>
          {logon ? (
            <button className="btn btn-outline-dark" onClick={logoutHandle}>
              ππΌπ΄ π’ππ
            </button>
          ) : (
            <></>
          )}
          <ul>
            {!signup && (
              <Link to="/signup" className="nav-link btn btn-outline-dark">
                π¦πΆπ΄π» ππ½
              </Link>
              
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;