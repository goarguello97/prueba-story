import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

db.sync({ force: true }).then(() => {
  console.log("DB connected");
  app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));
});
