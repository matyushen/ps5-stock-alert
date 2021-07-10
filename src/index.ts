require("dotenv").config();
import { checkPages } from "./checkPages";
import { format } from "date-fns";
import { Request, Response } from "express";
const express = require("express");
const cron = require("node-cron");
const app = express();

let count = 1;

const task = cron.schedule("*/5 * * * *", async () => {
  console.log(`🚀 ${" "} Running a #${count} cycle`);
  await checkPages();
  count += 1;
  console.log(`💤 ${" "}Sleeping at ${format(new Date(), "PPpp")}`);
});

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
  task.start();
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
