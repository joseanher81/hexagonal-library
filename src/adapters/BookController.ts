import { Request, Response } from "express";
import { CreateBook } from "../core/usecases/CreateBooks";
import { BorrowBook } from "../core/usecases/BorrowBooks";
import { ReturnBook } from "../core/usecases/ReturnBooks";
import { BookRepositoryMongo } from "../adapters/database/BookRepositoryMongo";
import { UserRepositoryMongo } from "../adapters/database/UserRepositoryMongo";

const bookRepo = new BookRepositoryMongo();
const userRepo = new UserRepositoryMongo();

const createBookUseCase = new CreateBook(bookRepo);
const borrowBookUseCase = new BorrowBook(bookRepo, userRepo);
const returnBookUseCase = new ReturnBook(bookRepo, userRepo);

export const BookController = {
  async create(req: Request, res: Response) {
    try {
      const { id, title, author, isbn } = req.body;
      const book = await createBookUseCase.execute({ id, title, author, isbn });
      res.status(201).json(book);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  async borrow(req: Request, res: Response) {
    try {
      const { userId, bookId } = req.body;
      const result = await borrowBookUseCase.execute(userId, bookId);
      res.status(200).json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  async return(req: Request, res: Response) {
    try {
      const { userId, bookId } = req.body;
      const result = await returnBookUseCase.execute(userId, bookId);
      res.status(200).json(result);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
