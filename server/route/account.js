import express from "express";
import Account from "../model/account.js";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/auth", async (req, resp) => {
    console.log(req.body);
    try {
        const { email, password } = req.body;
        const data = await Account.findOne({ email });
        console.log(data);
        if (data && bcrypt.compareSync(password, data.password)) {
            resp.status(200).json({ result: true, message: data });
        } else {
            throw new Error("invalid username / password");
        }
    } catch (e) {
        resp.status(401).json({ result: false, message: e.message });
    }
});


router.post("/register", async (req, resp) => {
    console.log(req.body);
    const one = { ...req.body, password: bcrypt.hashSync(req.body.password, 10) };
    try {
        const data = await Account.create(one);
        resp.status(201).json({ result: true, message: data });
    } catch (e) {
        resp.status(409).json({ result: false, message: e.message });
    }
});



export default router;