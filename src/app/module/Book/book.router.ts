import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { BookController } from "./book.controller";

const router = Router();
router.post("/", auth(Role.user), BookController.createBook);
router.get("/", auth(Role.user), BookController.getBooks);
router.delete("/:id", auth(Role.user), BookController.deleteBook);
router.put("/:id", auth(Role.user), BookController.updateBook);

export const BookRouter = router;
