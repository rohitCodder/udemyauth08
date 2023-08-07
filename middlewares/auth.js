import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandler.js";
import { User } from "../model/user.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return next(new ErrorHandler("Login first", 404));
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);
  next();
};
