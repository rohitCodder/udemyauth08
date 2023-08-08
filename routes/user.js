import express from "express";
import { getmyprofile, login, logout, register ,updateProfile,} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthenticated, getmyprofile);
router.route("/logout").get(isAuthenticated, logout);
router.route("/updateprofile").put(isAuthenticated, updateProfile);

export default router;
