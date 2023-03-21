import express from "express";
import { User, Book } from "./config.js";

const PORT = process.env.PORT | 5000;

const books = [];
const users = [];

const app = express();
app.use(express.json());

app.post("/api/user/login", (req, res) => {
  try {
    const { email } = req.body;
    const condidate = new User(email);
    users.push(condidate);
    res.status(201).json(condidate);
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

app.get("/api/books", (_, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

app.get("/api/books/:id", (req, res) => {
  try {
    const { id } = req.params;
    const book = books.find((book) => book.id === id);
    if (!book) {
      return res.status(404).json({ message: "Error" });
    }
    res.status(200).json(book);
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

app.post("/api/books", (req, res) => {
  try {
    const { title, description, authors, favorite, fileCover, fileName } =
      req.body;
    const newBook = new Book(
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName
    );
    books.push(newBook);
    res.status(200).json(newBook);
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

app.put("/api/books/:id", (req, res) => {
  try {
    const { title, description, authors, favorite, fileCover, fileName } =
      req.body;
    const { id } = req.params;
    const updatedBook = books.find((book) => book.id === id);

    if (!updatedBook) {
      return res.status(404).json({ message: "Error" });
    }
    updatedBook.title = title;
    updatedBook.description = description;
    updatedBook.authors = authors;
    updatedBook.favorite = favorite;
    updatedBook.fileCover = fileCover;
    updatedBook.fileName = fileName;
    res.status(200).json(updatedBook);
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

app.delete("/api/books/:id", (req, res) => {
  try {
    const { id } = req.params;
    books.splice(
      books.findIndex((book) => book.id === id),
      1
    );
    res.status(200).json("ok");
  } catch (error) {
    return res.status(404).json({ message: "Error" });
  }
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server listen ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
