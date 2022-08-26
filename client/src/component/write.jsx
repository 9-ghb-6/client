function Write() {

    return (
      <>
        <h2>𝓬𝓸𝓷𝓼𝓾𝓶𝓹𝓽𝓲𝓸𝓷 𝓱𝓲𝓼𝓽𝓸𝓻𝔂</h2>

        <form className="mt-5">
          <div className="form-floating mb-3">
            <input type="date" className="form-control" id="itemDate" />
            <label for="itemDate">소비날짜</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="useDesc" />
            <label for="useDesc">사용내역</label>
          </div>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="cashAmt" />
                <label for="cashAmt">현금</label>
              </div>
            </div>
            <div className="col-md">
              <div className="form-floating  mb-3">
                <input type="email" className="form-control" id="cardAmt" />
                <label for="cardAmt">카드</label>
              </div>
            </div>
          </div>
          <div className="form-floating mb-3">
            <select type="email" className="form-control" id="category" />
            <label for="category">카테고리</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="tag" />
            <label for="tag">태그</label>
          </div>
        </form>
      </>
    );
}

export default Write;