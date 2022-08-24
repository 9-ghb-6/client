import { useNavigate } from "react-router-dom";

function Index() {
  const navigate = useNavigate();

  const moveLogin = (evt) => {
    // evt.preventDefault();    //이벤트로 작동되는 function을 방지? 죽인다..
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
          See Profile
        </a>
      </div>
      <img
        className="card-img-bottom"
        src="../bootstrap4/img_avatar6.png"
        alt="Card image"
      />
    </div>
  );
}

export default Index;

// a href가 작동되서 이미지가 변경이 되는지 확인한번 해준다.
// bootstrap 공홈가서 사용되는게 어떻게 화면상으로 변하는지 확인한다.
