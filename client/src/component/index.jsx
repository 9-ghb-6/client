import {useNavigate} from "react-router-dom";

function Index() {
    const navigate = useNavigate();

    const moveLogin = (evt) =>{
        // evt.preventDefault();
        navigate("/login");
    }


    return (<div className="card mt-5" >
    <div className="card-body">
      <h4 className="card-title">Jane Doe</h4>
      <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
      <a onClick={moveLogin} className="btn btn-primary">See Profile</a>
    </div>
    <img className="card-img-bottom" src="../bootstrap4/img_avatar6.png" alt="Card image" />
  </div>);
}

export default Index;