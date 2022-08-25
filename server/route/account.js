import express from "express";

const router = express.Router();

router.post("/auth", (req, resp) => {
    console.log(req.body.email);
    resp.json({ result: true });
});



router.post("/resister", (req, resp) => {
    let a = req.body
    console.log(a);
    resp.json({ result: true });

});



export default router;