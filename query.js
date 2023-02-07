import { client } from './index.js';
import bcrypt from "bcrypt";

export async function getBookId(id) {
    return await client
        .db("b41wd2")
        .collection("books")
        .findOne({ id: id });
}
export async function PostBook(newBook) {
    return await client
        .db("b41wd2")
        .collection("books")
        .insertMany(newBook);
}
export async function BookLanguage(req) {
    return await client
        .db("b41wd2")
        .collection("books")
        .find(req.query).toArray();
}
export async function UpdateBook(id, updateBook) {
    return await client
        .db("b41wd2")
        .collection("books")
        .updateOne({ id: id }, { $set: updateBook });
}

//generating password

export async function genPassword(password) {
    const salt = await bcrypt.genSalt(10);  //bcrypt.genSalt(no.of.rounds)
    console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword);
    return hashedPassword;
}

//creating user

export async function createUser(username, hashedPassword) {
    return await client
        .db("b41wd2")
        .collection("users")
        .insertOne({ username: username, password: hashedPassword });
}

//validating username

export async function getUserByName(username){
    return await client
        .db("b41wd2")
        .collection("users")
        .findOne({username:username});
}