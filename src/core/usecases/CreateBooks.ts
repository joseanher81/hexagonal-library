// src/core/usecases/CreateBook.ts

import { Book } from "../entities/Book";
import { BookRepository } from "../ports/BookRepository";

export class CreateBook {
  constructor(private bookRepo: BookRepository) {}

  async execute(data: {
    id: string;
    title: string;
    author: string;
    isbn: string;
  }): Promise<Book> {
    const book = new Book({
      ...data,
      available: true,
      borrowedBy: null,
    });

    return await this.bookRepo.create(book);
  }
}
