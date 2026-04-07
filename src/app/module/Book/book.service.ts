import { prisma } from "../../../lib/prisma";

const createBook = async (userId: string, payload: any) => {
  const newBook = await prisma.book.create({
    data: {
      ...payload,
      userId,
    },
  });
  return newBook;
};
const getBooks = async (userId: string) => {
  const books = await prisma.book.findMany({
    where: {
      userId,
    },
  });
  return books;
};

const deleteBook = async (bookId: string, userId: string) => {
  const deletedBook = await prisma.book.deleteMany({
    where: {
      id: bookId,
      userId,
    },
  });
  return deletedBook;
};
const updateBook = async (bookId: string, userId: string, payload: any) => {
  const updatedBook = await prisma.book.updateMany({
    where: {
      id: bookId,
      userId,
    },
    data: payload,
  });
  return updatedBook;
};
export const BookService = {
  createBook,
  getBooks,
  deleteBook,
  updateBook,
};
