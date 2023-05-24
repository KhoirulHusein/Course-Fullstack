import express from  "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import router from "./routes/index.js";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials:true, origin:'http://localhost:3001' })); //meminta client mengirim credential & origin = domain dengan port 3000 ->> react js
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(5100, ()=> console.log("server running at port 5100"));