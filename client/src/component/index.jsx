import { useNavigate } from "react-router-dom";
import Image from "react-bootstrap/Image";

function Index() {
  const navigate = useNavigate();

  const moveLogin = (evt) => {
    // evt.preventDefault();    //이벤트로 작동되는 function을 방지? 죽인다..
    navigate("/login");
  };

  return (
    <div className="card mt-5">
      <div className="card-body">
        <h4 className="card-title">하삐니</h4>
        <p className="card-text">
          나는 문어 꿈을 꾸는 문어 꿈속에서는 무엇이든지 될 수 있어~~~ 나는 문어
          잠을 자는 문어 잠에 드는 순간 여행이 시작되는 거야
        </p>
        <a onClick={moveLogin} className="btn btn-primary">
          See Profile
        </a>
      </div>
      <img className="card-img-bottom" alt="Card image" />
      <a href="https://www.yeongnam.com/web/view.php?key=20170529.010260757340001"></a>
    </div>
  );
}

export default Index;

// a href가 작동되서 이미지가 변경이 되는지 확인한번 해준다.
// bootstrap 공홈가서 사용되는게 어떻게 화면상으로 변하는지 확인한다.
