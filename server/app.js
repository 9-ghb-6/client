import express from "express";
//const express = require("express");
const app = express();

import api from "./route/api"

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api,api");

app.get()
















app.listen(8080, () => {
    console.log("[SERVER] Start!")
})