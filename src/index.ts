require("dotenv").config();
import { checkPages } from "./checkPages";
import { format } from "date-fns";

const express = require("express");
const cron = require("node-cron");
const app = express();

let count = 1;

const task = cron.schedule("* * * * *", async () => {
  console.log(`🚀 ${" "} Running a #${count} cycle`);
  await checkPages();
  count += 1;
  console.log(`💤 ${" "}Sleeping at ${format(new Date(), "PPpp")}`);
});

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
  task.start();
});

app.listen(process.env.PORT);
