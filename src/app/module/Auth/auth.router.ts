import { Router } from "express";
import { AuthController } from "./auth.controller";

const router = Router();
router.post("/signup", AuthController.signUpUser);

export const AuthRouter = router;
