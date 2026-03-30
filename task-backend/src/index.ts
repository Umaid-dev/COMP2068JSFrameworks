import express from "express";
import { connectToDatabase } from "./services/database.service";
import taskRouter from "./routes/task.routes";
const app = express();
const port = 5050;

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