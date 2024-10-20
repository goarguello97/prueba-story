import { User } from "../models/index.js";

const isAdmin = async (req, res, next) => {
  const { username } = req.user;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.role === "ADMIN") {
      return next();
    } else {
      return res.status(400).json({ message: "Unauthorized" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default isAdmin;
