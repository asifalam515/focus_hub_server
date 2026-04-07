import type { Request, Response } from "express";
import { sendResponse } from "../../utils/sendResponse";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const payload = req.body;
  const newBook = await BookService.createBook(userId, payload);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Book created successfully",
    data: newBook,
  });
};
const getBooks = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const books = await BookService.getBooks(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: books,
  });
};
const deleteBook = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const bookId = req.params.id as string;
  await BookService.deleteBook(bookId, userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book deleted successfully",
  });
};
const updateBook = async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const bookId = req.params.id as string;
  const payload = req.body;
  await BookService.updateBook(bookId, userId, payload);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book updated successfully",
  });
};
export const BookController = {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
};
