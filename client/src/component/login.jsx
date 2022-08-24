function Login() {
  const handleSubmit = (evt) => {
    evt.prevenDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-floating mb-3 mt-3">
        <input
          type="text"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
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
          로그인하깅~
        </button>
      </div>
    </form>
  );
}

export default Login;
