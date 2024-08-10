import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { dbConnect } from "./db-connect/db-connect";

dotenv.config();

const PORT = process.env?.PORT ?? 6000;
const app: Application = express();
const server = http.createServer(app);

// Middlewares
app.use(cors());

app.get("/home", (_: Request, res: Response) => {
  res.json({ message: "This is home route" });
});

server.listen(PORT, async () => {
  await dbConnect();
  console.log("PORT is listen on ", PORT);
});
