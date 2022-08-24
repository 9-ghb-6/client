import express from "express";
//const express = require("express");
const app = express();
import morgan from "morgan";

import api from "./route/api.js"

app.use(morgan("short"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", api);

















app.listen(8080, () => {
    console.log("[SERVER] Start!")
})