import express from "express";
import { getBookId, PostBook, BookLanguage, UpdateBook } from '../query.js';
import { auth } from "../middleware/auth.js";

const router = express.Router();

//books/id
router.get("/:id", auth, async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const book = await getBookId(id);
    //to display error message //
    book ? res.send(book) : res.status(404).send({ message: "book not found" })
});


//How to POST a book//
//we can use inbuilt middleware to convert to json //
// since express cannot understand json //

router.post("/", async (req, res) => {
    const newBook = req.body;
    console.log(newBook);
    const result = await PostBook(newBook);
    res.send(result);
    console.log(result);
}
);

//To get language and rating //

router.get("/", auth, async (req, res) => {
    const { language, rating } = req.query;
    console.log(req.query, language);
    console.log(req.query, rating);
    if (req.query.rating) {
        req.query.rating = +req.query.rating
    }
    console.log(req.rating)
    const book = await BookLanguage(req);
    res.send(book);
});

//To update book//

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updateBook = req.body;
    console.log(updateBook);
    const result = await UpdateBook(id, updateBook);
    res.send(result);
    console.log(result);
});

export const bookrouter = router;