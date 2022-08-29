import { response } from "express";

class HistoryAPI {
    constructor(baseURL) {
        const token = localStorage.getItem("token");
        this.baseURL = baseURL;
        this.getOption = {
            method: "get",
            headers: {
                "authorization": "Bearer" + token
            }
        
        }
        this.post = {
            mothod: "post",
            Headers: {
                "content-type": "application/json",
                "authorization": "bearer" + token
            }
        }
    }
    // 특정달의 데이터를 조회
    async history(dateMonth) {
        const response = await fetch(this.baseURL + "/api/history?month=" + month, {
            ...this.getOption,
        })
        return await response.json();
    }


    async write(itemDate,useDecs , cashAmt,cardAmt,category,tag) {
        const response = await fetch(this.baseURL + "/api/history/write", {
            ...this.postOption,
            body: JSON.stringify({ itemDate, useDecs, cashAmt, cardAmt, category, tag })
        })
        return await response.json();
    }
}
export default HistoryAPI;
