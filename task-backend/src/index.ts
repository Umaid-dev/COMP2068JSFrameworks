import express from "express";
import { connectToDatabase } from "./services/database.service";
import taskRouter from "./routes/task.routes";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

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


const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Tracker API",
      version: "1.0.0",
      description: "API for managing tasks (CRUD operations)",
    },
    servers: [
      {
        url: "https://comp-2068-js-frameworks-ruddy.vercel.app",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // path to your routes
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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