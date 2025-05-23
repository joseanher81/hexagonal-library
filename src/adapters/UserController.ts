import { Request, Response } from "express";
import { CreateUser } from "../../core/usecases/CreateUser";
import { UserRepositoryMongo } from "../database/UserRepositoryMongo";

const userRepo = new UserRepositoryMongo();
const createUserUseCase = new CreateUser(userRepo);

export const UserController = {
  async create(req: Request, res: Response) {
    try {
      const { id, name, email, role } = req.body;
      const user = await createUserUseCase.execute({ id, name, email, role });
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
