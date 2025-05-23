import { Book } from "../entities/Book";

export interface BookRepository {
  create(book: Book): Promise<Book>;
  findById(id: string): Promise<Book | null>;
  update(book: Book): Promise<Book>;
  delete(id: string): Promise<void>;
}
