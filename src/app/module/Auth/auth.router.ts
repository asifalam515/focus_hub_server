import { Router } from "express";
import { auth, Role } from "../../middleware/auth";
import { AuthController } from "./auth.controller";
const router = Router();
router.post("/signup", AuthController.signUpUser);
router.post("/login", AuthController.loginUser);
router.post("/logout", AuthController.logOutUser);
router.get("/me", auth(Role.user), AuthController.getUserFromToken);

export const AuthRouter = router;
