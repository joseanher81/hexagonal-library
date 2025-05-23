import { BookRepository } from "../../core/ports/BookRepository";
import { Book } from "../../core/entities/Book";
import { BookModel } from "./models/BookModel";

export class BookRepositoryMongo implements BookRepository {
  async create(book: Book): Promise<Book> {
    const created = await BookModel.create(book);
    return new Book(created);
  }

  async findById(id: string): Promise<Book | null> {
    const doc = await BookModel.findOne({ id });
    return doc ? new Book(doc) : null;
  }

  async update(book: Book): Promise<Book> {
    const updated = await BookModel.findOneAndUpdate({ id: book.id }, book, {
      new: true,
    });
    if (!updated) throw new Error("Book not found");
    return new Book(updated);
  }

  async delete(id: string): Promise<void> {
    await BookModel.deleteOne({ id });
  }
}
