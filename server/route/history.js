
import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

//auth token check middelware
router.use((req, resp, next) => {

    // console.log(req.headers)

    const authorization = req.get("Authorization");
    if (!authorization || !authorization.startsWith("Bearer")) {
        return resp.status(401).json({ result: false, message: "unauthorized error" })
    }

    const token = authorization.split(" ")[1];  // 붙여서 쓰면  공백을 기준으로 나뉘는게 아니라 단어별로 나뉜다.
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.logonEmail = payload.email;

    } catch (e) {
        return resp.status(401).json({ result: false, message: e.message })
    }
    next();

});

router.get("/", (req, resp) => {
    console.log(req.logonEmail);
    return resp.status(200).json({ result: true, datas: [] })
});

router.get("/delete", (req, resp) => {
    console.log(req.logonEmail);
    return resp.status(200).json({ result: true })

});

export default router;