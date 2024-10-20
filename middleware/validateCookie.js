import { validateToken } from "../config/token.js";
import { User } from "../models/index.js";

async function validateCookie(req, res, next) {
  const { token } = req.cookies;
  if (!token) return res.status(400).json({ message: "Invalid token" });
  try {
    const payload = validateToken(token);
    if (!payload) return res.status(400).json({ message: "Unauthorized" });
    const user = await User.findOne({
      where: { username: payload.user.username },
    });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.username !== payload.user.username)
      return res.status(400).json({ message: "Invalid user" });

    req.user = payload.user;

    return next();
  } catch (error) {
    return res.status(400).json(error);
  }
}

export default validateCookie;
