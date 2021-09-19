require("dotenv").config();
import { checkPages } from "./checkPages";
import { Request, Response } from "express";

const express = require("express");
const cron = require("node-cron");
const app = express();

let count = 1;

const task = cron.schedule("*/3 * * * *", async () => {
  console.log(`🚀 ${" "} Running a #${count} cycle`);
  await checkPages();
  count += 1;
});

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
  task.start();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
