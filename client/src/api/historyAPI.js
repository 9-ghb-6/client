class HistoryAPI {
    constructor(baseURL) {
        this.baseURL = this.baseURL;
        this.get = {
            method: "get"
        }
        this.post = {
            mothod: "post",
            Headers: {
                "content-type": "application/json"
            }
        }
    }
}

export default HistoryAPI

