// src/core/usecases/BorrowBook.ts

import { BookRepository } from "../ports/BookRepository";
import { UserRepository } from "../ports/UserRepository";
import { Book } from "../entities/Book";
import { User } from "../entities/User";

export class BorrowBook {
  constructor(
    private bookRepo: BookRepository,
    private userRepo: UserRepository
  ) {}

  async execute(
    userId: string,
    bookId: string
  ): Promise<{ book: Book; user: User }> {
    const book = await this.bookRepo.findById(bookId);
    if (!book) throw new Error("Book not found");

    if (!book.available) throw new Error("Book is not available");

    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error("User not found");

    book.available = false;
    book.borrowedBy = userId;

    user.borrowedBooks.push(bookId);

    await this.bookRepo.update(book);
    await this.userRepo.update(user);

    return { book, user };
  }
}
