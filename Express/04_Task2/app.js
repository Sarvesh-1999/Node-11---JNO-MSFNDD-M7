import express from "express";

const Books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
];

const app = express();
const PORT = 9000;

//! MIDDLEWARE
app.use(express.json());

//! ROUTES

//---> HOMEPAGE ROUTE
app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

//---> GET ALL BOOKS
app.get("/all-books", (req, res) => {
  res.status(200).json({
    message: "fetched all books",
    data: Books,
  });
});

//---> ADD NEW BOOK
app.post("/add-book", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: "Title not found",
    });
  }

  let newBook = {
    id: Books.length + 1,
    title: req.body.title,
  };

  Books.push(newBook);

  res.status(201).json({
    message: "New book created",
    data: newBook,
  });
});

//---> GET SINGLE BOOK
app.get("/get-book/:id", (req, res) => {
  let bookID = Number(req.params.id);
  let myBook = Books.find((ele) => ele.id === bookID);

  if (!myBook) {
    return res.status(400).json({
      message: "Book Not Found!",
    });
  }

  res.status(200).json({
    message: "Book Found",
    data: myBook,
  });
});



app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log("Server Started at PORT", PORT);
});
