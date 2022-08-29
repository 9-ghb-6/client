import { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import AccountAPI from "../api/accountAPI";
import {useNavigate} from "react-router-dom"
function Signup() {
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const gender = useRef();
  const birth = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    AccountAPI.auth(email.current.vaule, password.current.value, name.current.value,
      gender.current.value, birth.current.value)
    localStorage.setItem("email")
      .then((rec) => {
        console.log(rec)
        if (rec.result) {
          console.log(rec.current.value)
        }
    })
    fetch("http://127.0.0.1:8080/api/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email.current.value,
        password: password.current.value,
        name: name.current.value,
        gender: gender.current.value,
        birth: birth.current.value,
      })
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-5">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">Email 주소는 누구에게도 공유되지 않습니다.</div>
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
      <div className="form-floating mt-3 mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name"
          ref={name}
        />
        <label htmlFor="pwd">Name</label>
      </div>
      <div className="form-floating mt-3 mb-3">
        <input
          type="text"
          className="form-control"
          id="gender"
          placeholder="gender?"
          ref={gender}
        />
        <label htmlFor="pwd">Gender</label>
      </div>
      <div className="form-floating mt-3 mb-3">
        <input
          type="text"
          className="form-control"
          id="birth"
          placeholder="birth"
          ref={password}
        />
        <label htmlFor="pwd">Birth</label>
      </div>
      <div id="demo" class="collapse"></div>
      <div className="mb-3 mt-3 d-grid">
        <button type="submit" className="btn btn-primary bnt-block">
          USING START !!!
        </button>
      </div>
    </form>
  );
}

export default Signup;

//fetch 동작확인 한번더 확인하고, 어떤 상황에 쓸지 구별해보자.
// async랑 await 확인한번더 근데 이건 비동기 함수라 크흠..
