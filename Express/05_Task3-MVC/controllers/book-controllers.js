import Book from "../models/book-model.js";

//! ADD BOOK
async function handleAddBook(req, res) {
  try {
    const newBook = req.body;
    let newlyCreatedBook = await Book.create(newBook);

    if (!newlyCreatedBook) {
      return res.status(400).json({
        success: false,
        message: "Unable to create book",
      });
    }

    res.status(201).json({
      success: true,
      message: "Book created",
      data: newlyCreatedBook,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

//! GET ALL BOOKS
async function handleGetAllBooks(req, res) {
  try {
    let allBooks = await Book.find({});

    if (allBooks.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Books available",
      });
    }

    res.status(200).json({
      success: true,
      message: "All Books fetched",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

//! GET SINGLE BOOK
async function handleGetSingleBook(req, res) {
  try {
    const bookID = req.params.id;
    let myBook = await Book.findById(bookID);

    if (!myBook) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book Found",
      data: myBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

//! UPDATE BOOK
async function handleUpdateBook(req, res) {
  try {
    const bookID = req.params.id;
    const newBookData = req.body;

    const updatedBook = await Book.findByIdAndUpdate(bookID, newBookData, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(400).json({
        success: false,
        message: "Book not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book Updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

//! DELETE BOOK
async function handleDeleteBook(req, res) {
  try {
    const bookID = req.params.id;

    const deletedBook = await Book.findByIdAndDelete(bookID);

    if (!deletedBook) {
      return res.status(400).json({
        success: false,
        message: "Book not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: deletedBook,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}

export {
  handleAddBook,
  handleDeleteBook,
  handleGetAllBooks,
  handleGetSingleBook,
  handleUpdateBook,
};
