import express from "express";
import { connectToDatabase } from "./services/database.service";
import taskRouter from "./routes/task.routes";
import cors from "cors";

const app = express();
const port = 5050;
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
// middleware
app.use(express.json());

connectToDatabase()
  .then(() => {
    app.use("/api/tasks", taskRouter);

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
  });