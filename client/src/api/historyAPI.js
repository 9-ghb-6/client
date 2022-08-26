import { response } from "express";

class HistoryAPI {
    constructor(baseURL) {
        const token = localStorage.getItem("token");
        this.baseURL = baseURL;
        this.getOption = {
            method: "get",
            headers: {
                "authorization":"Bearer"+token
            }
        
        }
        this.post = {
            mothod: "post",
            Headers: {
                "content-type": "application/json",
                "authorization":"bearer"+token
            }
        }
    }

    async history( dateMonth) {
        const response = await fetch(this.baseURL + "/api/history", {
            ...this.postOption, 
            body:JSON.stringify({dateMonth})
        })
        return await response.json();
    }
}

export default HistoryAPI
