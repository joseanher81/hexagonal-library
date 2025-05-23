// src/core/entities/User.ts

export class User {
  public id: string;
  public name: string;
  public email: string;
  public role: "admin" | "reader";
  public borrowedBooks: string[];

  constructor({
    id,
    name,
    email,
    role = "reader",
    borrowedBooks = [],
  }: {
    id: string;
    name: string;
    email: string;
    role?: "admin" | "reader";
    borrowedBooks?: string[];
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
    this.borrowedBooks = borrowedBooks;
  }
}
