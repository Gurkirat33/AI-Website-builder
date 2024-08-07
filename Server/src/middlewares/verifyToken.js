import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";

export const verifyToken = asyncHandler(async (req, res, next) => {
  try {
    const cookie = req.cookies?.accessToken;
    if (!cookie) {
      return res.status(401).json(apiError(401, "Unauthorized request"));
    }

    const decodedtoken = jwt.verify(cookie, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedtoken._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      return res.status(400).json(apiError(400, "Invalid access token"));
    }

    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json(apiError(401, error?.message || "Invalid access token"));
  }
});
