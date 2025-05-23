import { UserRepository } from "../../core/ports/UserRepository";
import { User } from "../../core/entities/User";
import { UserModel } from "./models/UserModel";

export class UserRepositoryMongo implements UserRepository {
  async create(user: User): Promise<User> {
    const created = await UserModel.create(user);
    return new User(created);
  }

  async findById(id: string): Promise<User | null> {
    const doc = await UserModel.findOne({ id });
    return doc ? new User(doc) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const doc = await UserModel.findOne({ email });
    return doc ? new User(doc) : null;
  }

  async update(user: User): Promise<User> {
    const updated = await UserModel.findOneAndUpdate({ id: user.id }, user, {
      new: true,
    });
    if (!updated) throw new Error("User not found");
    return new User(updated);
  }

  async delete(id: string): Promise<void> {
    await UserModel.deleteOne({ id });
  }
}
