
import express from "express";
import morgan from "morgan";
import cors from "cors";
// const express = require("express");
import account from "./route/account.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
import history from "./route/history.js";
import AccountAPI from "../client/src/api/accountAPI.js";
import HistoryAPI from "../client/src/api/historyAPI.js";

//cmd --> ipconfig
const serverIp = "192.168.4.59";
const accountAPI = new AccountAPI(`http://${serverIp}:8080`);
const historyAPI = new HistoryAPI(`http://${serverIp}:8080`);


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

app.use("/test", (req, resp) => {
    req.ch = "qwerwqer"
    req.query.ho = "qwerqwerqwer"
});

app.use("test", (req, resp) => {
    console.log("ch", req.query);
    console.log("ho", req.ho);
    resp.sendStatus(200);
});

app.use("/api/account", account);
app.use("/api/history", history);

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
    -jsonwebtoken : npm i dotenv jsonwebtoken
    -bcrypt : 암호화 해준다. npm i bcrypt



*/