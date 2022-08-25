import express, { response } from "express";

const router = express.Router();

router.post("/auth", (req, resp) => {
    console.log(req.body);
    if (Math.random() > 0.5) {
        resp.json({ result: true });
    } else {
        resp.json({ result: false });
    }
});
router.post("/resister", (req, resp) => {
    console.log(req.body);

});



export default router;