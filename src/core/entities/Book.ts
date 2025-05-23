// src/core/entities/Book.ts

export class Book {
  public id: string;
  public title: string;
  public author: string;
  public isbn: string;
  public available: boolean;
  public borrowedBy: string | null;

  constructor({
    id,
    title,
    author,
    isbn,
    available = true,
    borrowedBy = null,
  }: {
    id: string;
    title: string;
    author: string;
    isbn: string;
    available?: boolean;
    borrowedBy?: string | null;
  }) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.available = available;
    this.borrowedBy = borrowedBy;
  }
}
