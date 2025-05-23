import express from "express";
import { UserController } from "../UserController";
import { BookController } from "../BookController";

const router = express.Router();

router.post("/users", UserController.create);
router.post("/books", BookController.create);
router.post("/borrow", BookController.borrow);
router.post("/return", BookController.return);

export default router;
