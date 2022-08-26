import { Link } from "react-router-dom"



function Nav(props) {
  const  { logon , setLogon } = props;
  
  const logoutHandle = () =>{
    localStorage.removeItem("token");
    setLogon(null);
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >소비습관</Link>
        {logon && <span className="navbar-text">{logon}</span>}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {
                !logon &&
                <Link to="/login" className="nav-link">Login</Link>
              }
            </li>
          </ul>
          {  
            logon ?
             <button className="btn btn-outline-dark" onClick={logoutHandle}>LogOut</button> :
             <></>
          }
        </div>
      </div>
    </nav>
  );
}

export default Nav;