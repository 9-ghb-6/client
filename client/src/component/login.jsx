import { useRef } from "react";
import authAPI from "../api/authAPI";

function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8080/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          ref={email}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating mt-3 mb-3">
        <input
          type="password"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          ref={password}
        />
        <label htmlFor="pwd">Password</label>
      </div>
      <div className="mb-3 mt-3 d-grid">
        <button type="submit" className="btn btn-primary bnt-block">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Login;

//fetch 동작확인 한번더 확인하고, 어떤 상황에 쓸지 구별해보자.
// async랑 await 확인한번더 근데 이건 비동기 함수라 크흠..
