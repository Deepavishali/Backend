// const express = require("express"); //3rd party package
// const { MongoClient } = require("mongodb");

import * as dotenv from 'dotenv';
import cors from "cors";
import express, { request } from "express";
import { MongoClient } from "mongodb";
import { bookrouter } from "./routes/book.js";
import bcrypt from "bcrypt";
import { usersRouter } from './routes/user.js';

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT;


//req - what we send to server(params, queryParams, body)
//res - what server will send us back

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("Mongo is conected😎");
    return client;
}

export const client = await createConnection();

//interceptor => converting body to json
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Everyone🥳🥳🎆🎆🎇🎇 This is deepa vishali");
});


//setting routes//
app.use("/books", bookrouter);

app.use("/user", usersRouter);

//PORT//
app.listen(PORT, () => console.log("Server started on PORT", PORT));


