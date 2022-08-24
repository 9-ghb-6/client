import { useEffect, useState } from "react";

function Login() {
  const handleSubmit = (evt) => {
    evt.prevenDefault();
  };

  const [id, setId] = useState({});
  useEffect(() => {
    fetch(`127.0.0.1:8080/api/login`)
      // .then((response) => response.json())
      .then((data) => {
        console.log(data.body);
        setId(data.body);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="id"
          placeholder="Enter email"
          name="id"
        />

        <label for="email">Email</label>
      </div>
      <div className="form-floating mt-3 mb-3">
        <input
          type="text"
          className="form-control"
          id="pwd"
          placeholder="Enter password"
          name="pswd"
        />
        <label for="pwd">Password</label>
      </div>
      <div className="mb-3 mt-3 d-grid">
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Login;
