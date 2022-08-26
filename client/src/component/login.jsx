import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"

function Login({ setLogon, accountAPI }) {
  const navigate = useNavigate();
  //props 로 전달받을 시 const{accountAPI, setLogon} = props;
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    accountAPI.auth(email.current.value, password.current.value)
      .then((receieved) => {
        console.log(receieved);
        if (receieved.result) {
          setLogon(email.current.value);
          console.log(receieved.token);// 토큰을 어딘가에 저장해야 될지 생각해봐.
          localStorage.setItem("token", receieved.token);
          navigate("/");
          setError(false);
        } else {
          setError(true);
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          name="email"
          id="email"
          placeholder="Enter email"
          ref={email}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mt-3 mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          ref={password}
        />
        <label htmlFor="pwd">Password</label>
      </div>
      <div className="mb-3 mt-3 d-grid">
        <button type="submit" className="btn btn-primary bnt-block">
          Sign In
        </button>
      </div>
    </form>
  );
}

export default Login;

//fetch 동작확인 한번더 확인하고, 어떤 상황에 쓸지 구별해보자.
// async랑 await 확인한번더 근데 이건 비동기 함수라 크흠..
