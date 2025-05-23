// src/core/usecases/CreateUser.ts

import { User } from "../entities/User";
import { UserRepository } from "../ports/UserRepository";

export class CreateUser {
  constructor(private userRepo: UserRepository) {}

  async execute(data: {
    id: string;
    name: string;
    email: string;
    role?: "admin" | "reader";
  }): Promise<User> {
    const existing = await this.userRepo.findByEmail(data.email);
    if (existing) {
      throw new Error("Email already in use");
    }

    const user = new User({ ...data, borrowedBooks: [] });
    return await this.userRepo.create(user);
  }
}
