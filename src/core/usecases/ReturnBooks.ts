// src/core/usecases/ReturnBook.ts

import { BookRepository } from "../ports/BookRepository";
import { UserRepository } from "../ports/UserRepository";
import { Book } from "../entities/Book";
import { User } from "../entities/User";

export class ReturnBook {
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

    if (book.borrowedBy !== userId) {
      throw new Error("Book is not borrowed by this user");
    }

    const user = await this.userRepo.findById(userId);
    if (!user) throw new Error("User not found");

    book.available = true;
    book.borrowedBy = null;

    user.borrowedBooks = user.borrowedBooks.filter((id) => id !== bookId);

    await this.bookRepo.update(book);
    await this.userRepo.update(user);

    return { book, user };
  }
}
