function Write() {

    return (
      <>
        <h2>π¬πΈπ·πΌπΎπΆπΉπ½π²πΈπ· π±π²πΌπ½πΈπ»π</h2>

        <form className="mt-5">
          <div className="form-floating mb-3">
            <input type="date" className="form-control" id="itemDate" />
            <label for="itemDate">μλΉλ μ§</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="useDesc" />
            <label for="useDesc">μ¬μ©λ΄μ­</label>
          </div>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="cashAmt" />
                <label for="cashAmt">νκΈ</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating  mb-3">
                <input type="email" className="form-control" id="cardAmt" />
                <label for="cardAmt">μΉ΄λ</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <select type="email" className="form-control" id="category" />
            <label for="category">μΉ΄νκ³ λ¦¬</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tag" />
            <label for="tag">νκ·Έ</label>
          </div>
        </form>
      </>
    );
}

export default Write;