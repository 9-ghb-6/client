import jwt from "jsonwebtoken"

const secret = "%74@A#ZPaOA@nU2RKwA*4!JRBsUai3@u"

const token = jwt.sign({ subject: "backend" }, secret, { expiresIn: 5 });

setTimeout(() => {
    const r = jwt.verify(token, secret);
    console.log(r);
}, 6000);