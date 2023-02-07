import express from "express";
import { genPassword, createUser ,getUserByName} from "../query.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    const isuserExist = await getUserByName(username);
    console.log(isuserExist);
    if(isuserExist){
        res.status(400).send({message:"User already taken"});
        return;
    }
    const hashedPassword = await genPassword(password);
    const result = await createUser(username, hashedPassword)
    // console.log(hashedPassword);
    res.send(result);
});

export const usersRouter = router;