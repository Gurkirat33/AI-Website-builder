import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { email, password, rememberMe } = req.body;
  if (email.trim() === "" || password.trim() === "") {
    return res
      .status(400)
      .json(apiError(400, "Email and password are required", {}));
  }
  if (await User.findOne({ email })) {
    return res.status(400).json(apiError(400, "User already exists", {}));
  }

  const user = await User.create({ email, password });

  const options = {
    httpOnly: true,
    secure: true,
  };

  const accessToken = await user.generateAccessToken();
  if (rememberMe) {
    const refreshToken = await user.generateRefreshToken();
    user.refreshToken = refreshToken;
    await user.save();
    res.cookie("refreshToken", refreshToken, options);
  }
  const userWithoutPassword = await User.find({ email }).select(
    "-password -refreshToken"
  );

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(apiResponse(200, "User registered successfully", {}));
});

export const getUser = asyncHandler(async (req, res) => {
  const user = req.user;
  return res.status(200).json(apiResponse(200, "User Details", user));
});

export const logoutUser = asyncHandler(async (req, res) => {
  const user = req.user;
  if (!user) {
    return res.status(400).json(apiError(400, "Unauthorized request", {}));
  }

  user.refreshToken = null;
  await user.save();
  res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(apiResponse(200, "User logged out successfully", {}));
});

export const canCreateWebsite = asyncHandler(async (req, res) => {
  const user = req.user;

  if (user.activePlan === "free" && user.numberOfWebCreated >= 1) {
    return res
      .status(400)
      .json(apiResponse(200, "You can create only 1 website", true));
  }

  if (user.activePlan === "pro" && user.numberOfWebCreated >= 5) {
    return res
      .status(400)
      .json(apiResponse(200, "You can create only 5 websites", true));
  }

  return res.status(200).json(apiResponse(200, "You can create website", true));
});
