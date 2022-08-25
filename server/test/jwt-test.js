import jwt from "jsonwebtoken";

const secret = "%74@A#ZPaOA@nU2RKwA*4!JRBsUai3@u"
const w_secret = "%60@A#ZPaOA@nU2RKwA*4!JRBsUai3@u"
let token = jwt.sign({ subject: "backend", title: "jwt" }, secret);
console.log(token)
//토큰을 만드는거

const result = jwt.verify(token, secret);
console.log(result)
// 유효성 검사
const v_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiZnJvbnRlbmQiLCJ0aXRsZSI6Imp3dCIsImlhdCI6MTY2MTQwMzg1NH0.gjj0jY66Q8JiI6foMiw6cT_nPOj9hEz4K63Ez9ZYC8s"
console.log(jwt.verify(v_token, secret));