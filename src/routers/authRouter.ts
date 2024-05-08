import { Router } from "express";
import userMiddleware from "../middlewares/userMiddlewares";
import platformMiddleware from "../middlewares/platformMiddleware";
import authController from "../controllers/authController";
const router = Router();

router.post(
    "/register",
    userMiddleware.validateUserRegister,
    platformMiddleware.checkPlatform,
    authController.register
);

router.post(
    "/login",
    userMiddleware.validateUserLogin,
    platformMiddleware.checkPlatform,
    authController.login
);

router.delete(
    "/logout",
    platformMiddleware.checkPlatform,
    authController.logout
);

export default router;