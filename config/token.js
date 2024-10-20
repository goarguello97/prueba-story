import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: ".env" });

const { SECRET } = process.env;

export function generateToken(payload) {
  const token = jwt.sign({ user: payload }, SECRET, { expiresIn: "30m" });
  return token;
}

export function validateToken(token) {
  return jwt.verify(token, SECRET);
}
