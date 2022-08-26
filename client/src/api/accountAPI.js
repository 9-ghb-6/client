class AccountAPI {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.get = {
            method: "get"
        }
        this.postOption = {
            method: "post",
            Headers: {
                "content-type": "application/json"
            }
        }
    }
    // 로그인 인증 시
    async auth(email, password) {
        const response = await fetch(this.baseURL+"/api/account/auth", {
            ...this.postOption,
            body: JSON.stringify({ email, password })
        })
        return await response.json();
    }

    async register(email, password, name, gender, birth) {
        const response = await fetch(this.baseURL + "api/account/register", {
            ...this.postOption,
            body: JSON.stringify({ email, password, name, gender, birth })
        })
        return await response.json()
    }


}



export default AccountAPI

