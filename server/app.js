
import express from "express";
import morgan from "morgan";
import cors from "cors";
// const express = require("express");
import account from "./route/account.js"
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGODB_URI)
mongoose.connect(process.env.MONGODB_URI, {
    dbName: "moneybook"
})

const app = express();

app.use(cors());
app.use(morgan("[Server] : method : rul : status(:response-time ms|:date[iso])"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/api/account", account);
// app.use("/api/history", history);

app.listen(8080, () => {
    console.log("[Server] start.");
});


//이동경로 확실하게 파악하는 쪽으로 한번 가보자잇!!


/*
    -cors
    -morgan
    -express
    -mongoose
    -mongodb
    -dotenv
    -jsonwebtoken : npm dotenv jsonwebtoken
    -bcrypt : 암호화 해준다.



*/