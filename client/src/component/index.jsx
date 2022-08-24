import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const moveLogin = (evty) => {
    // evty.preventDefault();
    navigate("/login");
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h4 className="card-title">Jane Doe</h4>
        <p className="card-text">
          Some example text some example text. Jane Doe is an architect and
          engineer
        </p>
        <a onClick={moveLogin} className="btn btn-primary">
          프로필 보기
        </a>
      </div>
      <img
        className="card-img-bottom"
        src="../Downloads/Flag_of_South_Korea.svg"
        alt="Card image"
      />
    </div>
  );
}
{
  /* <nav className="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>; */
}

export default Index;
