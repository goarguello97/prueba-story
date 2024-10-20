import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import db from "./config/db.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 3001;

db.sync({ force: true }).then(() => {
  console.log("DB connected");
  app.listen(PORT, () => console.log(`Server listen in port ${PORT}`));
});
