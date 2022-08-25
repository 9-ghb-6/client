import bcrypt from "bcrypt";


!async function () {
    const plain = "1q2w3e4r";

    console.log(plain);
    bcrypt.hash(plain, 10, (err, data) => {
        //암호화 시키고 싶은 값 , 소금(암호화) 치는 횟수, function

        console.log("err =", err);
        console.log("data = ", data)
    });

    const result = await bcrypt.hash(plain, 10);
    console.log("result =", result)

    const check = await bcrypt.compare(plain, result);
    console.log(check);
}();